import './taskList.scss';

export class TaskList extends Component {
  originTasks = [];
  state = {
    todos: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then(data => {
        const tasks = data.filter((task, index) => index < 10);
        this.originTasks = tasks;
        this.setState({ todos: this.originTasks });
      });
  }

  filterTasks = ({ target }) => {
    if (target.value.length > 2) {
      const filteredTasks = this.originTasks.filter(task => task.title.includes(target.value));
      this.setState({ todos: filteredTasks });
      return;
    }

    if (target.value.trim() === '') {
      this.setState({ todos: this.originTasks });
      return;
    }
  };

  render() {
    return (
      <div className="task-list">
        <h2>This is Task list</h2>
        <input
          type="text"
          onChange={this.filterTasks}
        />
        {
          this.state.todos &&
          <ul>
            {
              this.state.todos
                .map(task => (
                  <li
                    key={task.id}
                    className={task.completed ? 'completed' : 'not-completed'}
                  >
                    {task.id}. {task.title}
                  </li>))
            }
          </ul>
        }
      </div>
    );
  }
}
