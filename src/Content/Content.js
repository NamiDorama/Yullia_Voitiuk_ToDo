import { Button } from '../Button';
import { GetLocation } from '../GetLocation';
import { Form } from '../Form';
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
    <Form />
  </div>
);
