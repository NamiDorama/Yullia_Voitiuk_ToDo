import './task.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  getTaskByIdAsync,
  updateCurrentTaskAsync,
  createTaskAsync,
  updateCurrentTask
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

  static getDerivedStateFromProps(nextProps) {

    if (nextProps.match.params.task !== 'new_task') {
      return { ...nextProps.currentTask }
    }
    if (typeof nextProps.currentTask.id !== 'undefined') {
      return { ...nextProps.currentTask }
    }
    return null;
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task === 'new_task') {
      this.setState({ day: this.props.location.search.replace(/\D+/, '') || '' });
      return;
    }

    this.props.getTask(task);

  }

  componentWillUnmount() {
    this.props.deleteUpdated(false);
  }

  updateUsersTask = (event) => {
    const { task } = this.props.match.params;

    task === 'new_task' ? this.props.createTask(this.state) : this.props.updateCurrent(this.state);

    event.preventDefault();
  };

  changeInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description, day, updated } = this.state;

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

        { updated && <Redirect to="/tasks" /> }
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTask(data) { dispatch(getTaskByIdAsync(data))},
  updateCurrent(data) { dispatch(updateCurrentTaskAsync(data))},
  deleteUpdated(data) { dispatch(updateCurrentTask(data))},
  createTask(data) { dispatch(createTaskAsync(data))},
  setError(err) { dispatch(setError(err)); }
});

export const Task = connect(({ currentTask }) => ({ currentTask }), mapDispatchToProps)(TaskComponent);
