import { ToastContainer } from 'react-toastr';

import { Header } from './parts';
import { Pages } from './Pages';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Preloader } from './components/Preloader/';
import {
  setUser,
  getUser,
  setError
} from './store';

export class AppComponent extends Component {
  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  };

  componentDidUpdate() {
    if (this.props.error) {
      this.container.error(
        <strong>{this.props.error}</strong>
      );
      this.props.dispatch(setError(''));
    }
  }

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />

        <Header
          user={user}
          setLoginState={this.setLoginState}
        />
        <div className="wrapper">
          {
            user !== false ?
              <Pages
                setLoginState={this.setLoginState}
                login={user}
              /> :
              <Preloader />
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = state => ({
  user: state.user,
  error: state.error
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
