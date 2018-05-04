import { ToastContainer } from 'react-toastr';

import { Header } from './parts';
import { Pages } from './Pages';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Preloader } from './components/Preloader/';
import { checkUser } from './services';
import { errObserver } from './services';
import { setUser } from './store';

export class AppComponent extends Component {
  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  };

  componentDidMount() {
    this.container.error(
      <strong>Error</strong>,
      <em>Error</em>
    );

    checkUser()
      .then((data) => {
        this.setLoginState(data)
      })
      .catch(err => this.props.dispatch(setUser(null)));

    errObserver.addObserver((err = 'Something goes wrong...') => this.props.user !== false && this.container.error(
      <strong>{err}</strong>,
      <em>Error</em>
    ));
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
  user: state.user
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
