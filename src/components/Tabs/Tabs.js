import ProptTypes from 'prop-types';
import { TabNav } from './TabNav';
import {Tab} from './Tab';

import './tabs.scss';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      id: 0,
      selectedIndex: new Date().getDay()
    };
  }

  clickTab = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title || 'Tab');
    const contents = tabs.map(tab => tab.props.children);

    return (
      <section className="tab">
        <TabNav
          list={links}
          select={this.clickTab}
          activeIndex={this.state.selectedIndex || this.state.id}
        />
        <div>
          {contents[this.state.selectedIndex || this.state.id]}
        </div>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: ProptTypes.array
};
