import { Tabs, Tab } from '../../components/Tabs/index';
import { Link } from 'react-router-dom';
import { getTasksList } from '../../services';

export class TaskListTab extends Component {
  state = {
    days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    tasksInWeek: null
  };


  componentDidMount() {
    getTasksList()
      .then(data => {
        this.setState({ tasksInWeek: data })
      });
  };

  render() {
    const { days, tasksInWeek } = this.state;

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
                    <li key={task.id}>
                      <Link
                        to={`/tasks/${task.id}`}
                      >
                        {task.title}
                      </Link>
                    </li>
                  ) )
                }
              </ol>
              <button>Add new</button>
            </Tab>
          )
        }
      </Tabs>
    );
  }
}
