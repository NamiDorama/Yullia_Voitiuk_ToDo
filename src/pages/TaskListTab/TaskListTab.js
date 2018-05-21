import { Tabs, Tab } from '../../components/Tabs/index';
import { Link } from 'react-router-dom';
import {
  getTasksAsync,
  updateTaskAsync,
  deleteTaskAsync,
  setError
} from '../../store';
import { days, icons } from '../../consts';
import { connect } from 'react-redux';

import './taskListTab.scss';

export class TaskListTabComponent extends Component {
  componentDidMount() {
    this.props.getTasks()
  };

  createNewTask = (day) => {
    this.props.history.push(`tasks/new_task?day=${day}`);
  };

  changeTaskStatus = (key, task, day) => {
    const todayTasks = this.props.tasksInWeek[day];

    if (key === 'completed') {
      task.done = true;
      this.props.updateTask(task);
    }

    if (key === 'in-progress') {
      let inProgress = todayTasks.filter(dayTask => dayTask.done === false);
      if (inProgress.length < 2) {
        task.done = false;
        this.props.updateTask(task);
      } else {
        this.props.setError('Sorry, only two tasks can be in progress');
      }
    }

    if (key === 'delete') {
      this.props.deleteTask(task);
    }
  };

  render() {
    const { tasksInWeek } = this.props;

    return (
      tasksInWeek &&
      <Tabs selectedIndex={ new Date().getDay() }>
        {
          tasksInWeek.map((tasks, index) =>
            <Tab
              key={index}
              title={days[index]}
            >
              <ol>
                {
                  tasks.map(task => (
                    <li
                      key={task.id}
                      className={
                        `${typeof task.done !== 'undefined' && task.done ? 'completed' : 'not-completed'}
                          ${task.done === false ? 'in-progress' : ''}`}
                    >
                      <Link
                        to={`/tasks/${task.id}`}
                      >
                        {task.title}
                      </Link>
                      {
                        icons.map(icon => (
                          <span
                            key={icon}
                            className={icon}
                            title={icon}
                            onClick={() => this.changeTaskStatus(icon, task, index)}
                          />
                        ))
                      }
                    </li>
                  ) )
                }
              </ol>
              <button onClick={() => this.createNewTask(index)}>Add new</button>
            </Tab>
          )
        }
      </Tabs>
    );
  }
}

const mapStoreToProps = state => ({
  tasksInWeek: state.tasksInWeek
});

const mapDispatchToProps = dispatch => ({
  getTasks() { dispatch(getTasksAsync())},
  updateTask(data) { dispatch(updateTaskAsync(data))},
  deleteTask(data) { dispatch(deleteTaskAsync(data))},
  setError(err) { dispatch(setError(err)); }
});

export const TaskListTab = connect(mapStoreToProps, mapDispatchToProps)(TaskListTabComponent);
