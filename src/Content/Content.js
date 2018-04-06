import { Button } from '../Button';
import { GetLocation } from '../GetLocation';
import { Timer } from '../Timer';
import { Edit } from '../Edit';
import { TaskList } from '../TaskList';
import './content.scss';

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
  </div>
);
