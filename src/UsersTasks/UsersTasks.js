import './usersTasks.scss';

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
        <h3>Hello{` , ${this.state.userName}` || ' , user'}!</h3>
        <div className="tasks-list">
          <ul>
            <li>You have: <span>{this.state.allTasks}</span> tasks</li>
            <li>Done: <span>{this.state.done}</span></li>
            <li>In progress: <span>{this.state.inProgress}</span></li>
            <li>Waiting: <span>{this.state.waiting}</span></li>
          </ul>
        </div>
        <p>
          <a href="/task-list">Go to the task list</a>
        </p>
      </div>
    );
  }
}
