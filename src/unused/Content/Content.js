import { Tabs, Tab } from '../../components/Tabs/index';
import './content.scss';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'First text here' },
  { id: 1, title: 'Tab 2', content: 'Second content' },
  { id: 2, title: 'Tab 3', content: 'Third text' }
];

export const Content = () => (
  <div id="content">
    <Tabs>

      <Tab title="Tab 1">
        <h1>Title</h1>
        <article>First text here</article>
      </Tab>

      <Tab title="Tab 2">
        <h1>Title</h1>
        <article>Some second text here</article>
      </Tab>

      <Tab title="Tab 3">
        <h1>Title</h1>
        <article>Some third text here</article>
      </Tab>

    </Tabs>
  </div>
);
