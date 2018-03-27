export class Counter extends Component {
  state = {
    users: []
  };

  clickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ users: users.sort((prev, next) => prev.name > next.name) }));
  }

  render() {
    return (
      <div className="counter">
        <button
          onClick={this.clickHandler}
        >
          Get users
        </button>
        {
          this.state.users.length > 0 &&
            <ul>
              {
                this.state.users.map(user => <li key={user.id}>{user.name}</li>)
              }
            </ul>
        }
      </div>
    );
  }
}
