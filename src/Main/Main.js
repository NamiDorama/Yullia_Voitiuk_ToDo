import { TaskListTab } from '../TaskListTab';
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
        <main id="main">
          <TaskListTab />
          <button onClick={() => this.props.history.push('/tasks')}>Go to task list</button>
        </main>
      </React.Fragment>
    );
  }
}
