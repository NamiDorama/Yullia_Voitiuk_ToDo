import { Button } from '../Button';
import { GetLocation } from '../GetLocation';
import { Timer } from '../Timer';
import { Edit } from '../Edit';
import { TaskList } from '../TaskList';
import { Tabs } from '../Tabs';
import './content.scss';

const tabs = [
  {id: 0, title: 'Tab 1', content: 'Some text is here'},
  {id: 1, title: 'Tab 2', content: 'Another content'},
  {id: 2, title: 'Tab 3', content: 'Third text'}
];

class Header extends Component {
  render() {
    return <h1>I am a class component</h1>;
  }
}

export const Content = () => (
  <div id="content">
    <Header />
    <h2>Content component</h2>
    <Button />
    <GetLocation />
    <Timer />
    <Edit callbackFunc={(text) => console.log(text)} />
    <TaskList />
    <Tabs tabs={tabs}/>
  </div>
);
