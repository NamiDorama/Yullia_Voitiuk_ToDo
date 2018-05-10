import { Tabs, Tab } from '../../components/Tabs/index';
import { Link } from 'react-router-dom';
import {
  getTasksList,
  updateTask,
  deleteTask,
  errObserver
} from '../../services';
import { tasksList, getTasks } from '../../store';
import { days, icons } from '../../consts';
import { connect } from 'react-redux';

import './taskListTab.scss';

export class TaskListTabComponent extends Component {
  componentDidMount() {
    getTasksList()
      .then(tasksInWeek => this.props.getTasks(tasksInWeek));
  };

  createNewTask = (day) => {
    this.props.history.push(`tasks/new_task?day=${day}`);
  };

  changeTaskStatus = (key, task, day) => {
    let tasksInWeek = [...this.state.tasksInWeek];
    const todayTasks = this.state.tasksInWeek[day];

    if (key === 'completed') {
      task.done = true;
      updateTask(task)
        .then(() => this.setState({ tasksInWeek }));
    }

    if (key === 'in-progress') {
      let inProgress = todayTasks.filter(dayTask => dayTask.done === false);
      console.log(inProgress);
      if (inProgress.length < 2) {
        task.done = false;
            updateTask(task)
              .then(() => this.setState({ tasksInWeek }));
      } else {
        errObserver.trigger('Sorry, only two tasks can be in progress');
      }
    }

    if (key === 'delete') {
      deleteTask(task.id)
        .then(data => {
          let tasks = todayTasks.filter(task => task.id !== data.id);
          tasksInWeek[day] = tasks;
          this.setState({ tasksInWeek });
        });
    }
  };

  render() {
    const { tasksInWeek } = this.props;

    return (
      tasksInWeek ?
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
      </Tabs> : null
    );
  }
}

const mapStoreToProps = state => ({
  tasksInWeek: state.tasksInWeek
});

const mapDispatchToProps = dispatch => ({
  getTasks() {dispatch(getTasks())}
});

export const TaskListTab = connect(mapStoreToProps, mapDispatchToProps)(TaskListTabComponent);
