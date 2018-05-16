import './task.scss';
import { connect } from 'react-redux';
import {
  getTaskByIdAsync,
  updateTaskAsync,
  createTaskAsync
} from '../../store/actionTask'
import { days } from '../../consts';

export class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      id: null
    };
  }

  componentDidMount() {
    const { task } = this.props.match.params;
    if (task !== 'new_task') {
      this.props.getTask(task);
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.match.params.task !== 'new_task') {
      return { ...nextProps.currentTask }
    }
    return { day: nextProps.location.search.replace(/\D+/, '') || '' }
  }

  updateUsersTask = (event) => {
    const { task } = this.props.match.params;

    Promise.resolve(task === 'new_task' ? this.props.createTask(this.state) : this.props.updateTask(this.state))
      .then(() => this.props.history.push('/tasks'));

    event.preventDefault();
  };

  changeInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description, day } = this.state;

    return(
      <form
        className="task"
        onSubmit={this.updateUsersTask}
      >
        <p>Day: {days[day]}</p>
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

const mapStoreToProps = state => ({
  currentTask: state.currentTask
});

const mapDispatchToProps = dispatch => ({
  getTask(data) { dispatch(getTaskByIdAsync(data))},
  updateTask(data) { dispatch(updateTaskAsync(data))},
  createTask(data) { dispatch(createTaskAsync(data))},
  setError(err) { dispatch(setError(err)); }
});

export const Task = connect(mapStoreToProps, mapDispatchToProps)(TaskComponent);
