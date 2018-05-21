import './usersTasks.scss';
import { Link } from 'react-router-dom';
import { getInfoAboutTasks } from '../../services';

export class UsersTasks extends Component {
  state = {
    tasksInfo: []
  };

  componentDidMount() {
    getInfoAboutTasks()
      .then(tasksInfo => this.setState({ tasksInfo }));
  }

  render() {
    const { tasksInfo } = this.state;

    return (
      <div className="users-task-wrapper">
        <div className="tasks-list">
          <ul>
            <li>You have: <span>{tasksInfo.total}</span> tasks</li>
            <li>Done: <span>{tasksInfo.done}</span></li>
            <li>In progress: <span>{tasksInfo.inProgress}</span></li>
            <li>Waiting: <span>{tasksInfo.waiting}</span></li>
          </ul>
        </div>
        <p className="link-to">
          <Link to="/tasks">
            Go to the task list
          </Link>
        </p>
      </div>
    );
  }
}
