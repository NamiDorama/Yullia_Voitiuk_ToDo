import { Counter } from './Counter';
import './content.scss';

class Header extends Component {
  render() {
    return <h1>I am a class component</h1>;
  }
}

export const Content = () => (
  <div id="content">
    <Header />
    <Counter />
    <h2>Content component</h2>
  </div>
);
