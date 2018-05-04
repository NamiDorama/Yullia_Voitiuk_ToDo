import './task.scss';
import { getTask, updateTask } from '../../services';

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
    getTask(task)
      .then(data => this.setState({ ...data }))
  }

  updateUsersTask = (event) => {
    console.log('updating...');
    updateTask(this.state)
      .then(console.log);

    event.preventDefault();
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
