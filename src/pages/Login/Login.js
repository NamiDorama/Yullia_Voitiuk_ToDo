import { Preloader } from '../../components/Preloader';
import { loginUser } from '../../store';
import { connect } from 'react-redux';

export class LoginComponent extends Component {
  state = {
    loader: false
  };

  submit = (event) => {
    const { email, password } = event.target;

    event.preventDefault();
    this.setState({ loader: true });

   this.props.dispatch(loginUser({email: email.value, password: password.value}));
  };

  componentDidUpdate() {
    if(this.props.error) {
      this.setState({ loader: false });
    }
  }

  render() {
    const { loader } = this.state;

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
        </React.Fragment>
    )};
}

const mapStoreToProps = state => ({
  error: state.error
});


export const Login = connect(mapStoreToProps)(LoginComponent);
