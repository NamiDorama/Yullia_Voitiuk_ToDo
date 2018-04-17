import { Header } from './Header';
import { Pages } from './Pages';

export class App extends Component {
  state = {
    login: false,
    user: ''
  };

  setLoginState = (login, user) => {
    this.setState({ login, user });
  };

  render() {
    const { login } = this.state;
    return (
      <React.Fragment>
        <Header
          login={login}
          logout={this.setLoginState}
        />
        <Pages
          login={login}
          setLoginState={this.setLoginState}
        />
      </React.Fragment>
    );
  }
}
