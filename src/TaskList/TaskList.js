import './taskList.scss';

export class TaskList extends Component {
  originTasks = [];
  icons = ['delete', 'in-progress', 'completed'];
  state = {
    todos: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then(data => {
        this.originTasks = data.slice(0, 10);
        this.setState({ todos: this.originTasks });
      });
  }

  filterTasks = ({ target }) => {
    if (target.value.length >= 2) {
      const filteredTasks = this.originTasks.filter(task => task.title.includes(target.value));
      this.setState({ todos: filteredTasks });
      return;
    }

    if (target.value.trim() === '') {
      this.setState({ todos: [...this.originTasks] });
      return;
    }
  };

  changeTaskStatus = ({ target }, id) => {
    console.log(target.className);
    console.log(id);
  };

  render() {
    const { todos } = this.state;
    const { icons } = this;

    return (
      <div className="task-list">
        <h2>This is Task list</h2>
        <input
          type="text"
          placeholder="Enter to filter"
          onChange={this.filterTasks}
        />
        {
          todos &&
          <ul>
            {
              todos.map(task => (
                <li
                  key={task.id}
                  className={task.completed ? 'completed' : 'not-completed'}
                >
                  {task.id}. {task.title}
                  {
                    icons.map(icon => (
                      <span
                        key={icon}
                        className={icon}
                        title={icon}
                        onClick={(event) => this.changeTaskStatus(event, task.id)}
                      />
                    ))
                  }
                </li>))
            }
          </ul>
        }
      </div>
    );
  }
}
