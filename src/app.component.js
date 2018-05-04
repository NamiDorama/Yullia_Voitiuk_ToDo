import { Header } from './parts';
import { Pages } from './Pages';
import { Preloader } from './components/Preloader/';
import { checkUser } from './services';

export class App extends Component {
  state = {
    user: undefined
  };

  setLoginState = (user) => {
    this.setState({ user });
  };

  componentDidMount() {
    checkUser()
      .then((data) => {
        this.setLoginState(data)
      })
      .catch(err => console.log('Can\'t login', err));
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Header
          user={user}
          setLoginState={this.setLoginState}
        />
        <div className="wrapper">
          {
            user !== undefined ?
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
