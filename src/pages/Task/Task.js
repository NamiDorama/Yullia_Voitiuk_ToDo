import './task.scss';
import {
  getTask,
  updateTask,
  createTask
} from '../../services';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    this.state = {
      title: '',
      description: '',
      id: null
    }
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task === 'new_task') {
      this.setState({ day: this.getDay() });
      return;
    }

    getTask(task)
      .then(data => this.setState({ ...data }))
  }

  getDay() {
    return this.props.location.search.replace(/\D+/, '') || '';
  }

  updateUsersTask = (event) => {
    const { task } = this.props.match.params;

    let promise = task === 'new_task' ? createTask(this.state) : updateTask(this.state);

    event.preventDefault();

    promise
      .then(() => this.props.history.push('/tasks'));
  };

  changeInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description, day } = this.state;

    return (
      <form
        className="task"
        onSubmit={this.updateUsersTask}
      >
        <p>Day: {this.days[day]}</p>
        <input
          type="text"
          placeholder="Enter a title"
          name="title"
          value={title}
          onChange={this.changeInput}
          required
        />
        <textarea
          cols="30"
          rows="10"
          name="description"
          value={description}
          onChange={this.changeInput}
        >
      </textarea>
        <button>Save</button>
      </form>
    );
  }
}
