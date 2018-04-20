import { Preloader } from '../Preloader';

export class Login extends Component {
  state = {
    loader: false
  };

  submit = (e, onLogin) => {
    const user = e.target.name.value;

    e.preventDefault();
    this.setState({ loader: true });

    setTimeout(() => {
      onLogin(true, user);
    }, 2000);
  };

  render() {
    return (
      this.state.loader ?
        <Preloader /> :
      <form onSubmit={(e) => this.submit(e, this.props.onLogin)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          value="Log in"
        />
      </form>
    )};
}
