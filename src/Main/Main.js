import { Greeting } from '../Greeting';
import { NumberList } from '../NumberList';
import { UsersList } from '../UsersList';
import { Aside } from '../Aside';
import { Content } from '../Content';
import './main.scss';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <React.Fragment>
        <Greeting name="Yuliia" />
        <NumberList
          from={3}
          to={7}
          odd
        />
        <UsersList users={this.state.users} />
        <main id="main">
          <Aside />
          <Content />
        </main>
      </React.Fragment>
    );
  }
}
