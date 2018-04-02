import './form.scss';

export class Form extends Component {
  state = {
    email: '',
    name: '',
    surname: '',
    password1: '',
    password2: ''
  };

  changeInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      email, name, surname, password1, password2
    } = this.state;

    return (
      <div className="form-block">
        <h3>This is Form</h3>
        <form className="form">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.changeInput}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.changeInput}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={this.changeInput}
          />
          <input
            type="text"
            name="password1"
            placeholder="Enter password"
            value={password1}
            onChange={this.changeInput}
          />
          <input
            type="text"
            name="password2"
            placeholder="Repeat password"
            value={password2}
            onChange={this.changeInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
