import { Preloader } from '../../components/Preloader';
import { login } from '../../services';

export class Login extends Component {
  state = {
    loader: false,
    error: null
  };

  submit = (event) => {
    const { email, password } = event.target;

    event.preventDefault();
    this.setState({ loader: true });

    login({email: email.value, password: password.value})
      .then(user => {
        this.props.onLogin(user)
      })
      .catch(err => this.setState({ error: err, loader: false }))
  };

  render() {
    const { loader, error } = this.state;

    return (
      loader ?
        <Preloader /> :
        <React.Fragment>
          <form onSubmit={this.submit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue="admin@a.com"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              defaultValue="admin"
              required
            />
            <input
              type="submit"
              value="Log in"
            />
          </form>
          {
            error &&
            <p>{error}</p>
          }
        </React.Fragment>


    )};
}
