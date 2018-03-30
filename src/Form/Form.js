export class Form extends Component {
  users = ['Admin', 'User', 'Guest'];

  state = {
    name: '',
    age: 22,
    role: this.users[0],
    mail: false
  };

  changeInput = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({ [target.name]: target.checked });
      return;
    }

    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, age, role, mail } = this.state;
    const code = name.split('').reduce((prev, next) => prev + next.charCodeAt(), '');

    return (
      <React.Fragment>
        <h2>This is Form</h2>
        <form>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.changeInput}
          />
          <br/>
          <input
            name="age"
            type="number"
            value={age}
            onChange={this.changeInput}
          />
          <br/>
          <select
            name="role"
            value={role}
            onChange={this.changeInput}
          >
            {this.users.map(user => (
              <option
                value={user}
                key={user}
              >
                {user}
              </option>)
            )}
          </select>
          <br/>
          <label>
            <input
              type="checkbox"
              name="mail"
              checked={mail}
              onChange={this.changeInput}
            />
            Our checkbox
          </label>

        </form>
      </React.Fragment>
    );
  }
}
