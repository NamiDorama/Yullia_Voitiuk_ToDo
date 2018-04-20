
import './main.scss';
import {Greeting} from '../Greeting';

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
          <Greeting />
        </main>
      </React.Fragment>
    );
  }
}
