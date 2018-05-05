import { Tabs, Tab } from '../../components/Tabs/index';
import { Link } from 'react-router-dom';
import {
  getTasksList,
  updateTask,
  deleteTask
} from '../../services';

import './taskListTab.scss';

export class TaskListTab extends Component {
  state = {
    days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    tasksInWeek: null,
    icons: ['delete', 'in-progress', 'completed']
  };

  componentDidMount() {
    getTasksList()
      .then(data => {
        this.setState({ tasksInWeek: data })
      });
  };

  createNewTask = (day) => {
    this.props.history.push(`tasks/new_task?day=${day}`);
  };

  changeTaskStatus = ({ target }, task, day) => {
    if (target.className === 'completed') {
      task.done = true;
      updateTask(task)
        .then(task => this.setState({ ...task }));
    }

    if (target.className === 'delete') {
      deleteTask(task.id)
        .then(data => {
          let tasks = [];
          let tasksInWeek = [...this.state.tasksInWeek];

          this.state.tasksInWeek[day].map(task => {
            if (!task.id.includes(data.id)) {
              tasks.push(task);
            }
          });

          tasksInWeek[day] = tasks;
          this.setState({ tasksInWeek });
        });
    }
  };

  render() {
    const { days, tasksInWeek, icons } = this.state;

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
                      className={task.done ? 'completed' : 'not-completed'}
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
                            onClick={(event) => this.changeTaskStatus(event, task, index)}
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
