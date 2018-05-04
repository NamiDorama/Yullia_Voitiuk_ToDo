import './task.scss';
import { getTask } from '../../services';

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

  updateTask = () => {
    console.log('updating...')
  };

  changeInput = ({ target }) => {
    this.setState({ [target.name]: { value: target.value } });
  };

  render() {
    const { title, description, day } = this.state;
    return (
      <form
        className="task"
        onSubmit={this.updateTask}
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
          required
        >
      </textarea>
        <button>Save</button>
      </form>
    );
  }
}
