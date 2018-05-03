import './usersTasks.scss';
import { Link } from 'react-router-dom';

export class UsersTasks extends Component {
  state = {
    allTasks: 10,
    done: 3,
    inProgress: 1,
    waiting: 5,
    userName: 'Nami Dorama'
  };

  render() {
    return (
      <div className="users-task-wrapper">
        <div className="tasks-list">
          <ul>
            <li>You have: <span>{this.state.allTasks}</span> tasks</li>
            <li>Done: <span>{this.state.done}</span></li>
            <li>In progress: <span>{this.state.inProgress}</span></li>
            <li>Waiting: <span>{this.state.waiting}</span></li>
          </ul>
        </div>
        <p>
          <Link to="/tasks">
            Go to the task list
          </Link>
        </p>
      </div>
    );
  }
}
