import { Tabs, Tab } from '../../components/Tabs/index';
import { Link } from 'react-router-dom';
import {
  getTasksList,
  updateTask,
  deleteTask,
  errObserver
} from '../../services';
import { days, icons } from '../../consts';

import './taskListTab.scss';

export class TaskListTab extends Component {
  state = {
    tasksInWeek: []
  };

  componentDidMount() {
    getTasksList()
      .then(tasksInWeek => this.setState({ tasksInWeek }));
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
      if (todayTasks.every((dayTask) => dayTask.done !== 'in-progress')) {
        task.done = 'in-progress';
            updateTask(task)
              .then(() => this.setState({ tasksInWeek }));
      } else {
        errObserver.trigger('Sorry, only one task can be in progress');
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
    const { tasksInWeek } = this.state;

    return (
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
                        `${
                          task.done && task.done !== 'in-progress' ? 'completed' : 'not-completed'}
                          ${task.done === 'in-progress' ? 'in-progress' : ''}`}
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
