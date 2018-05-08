import ProptTypes from 'prop-types';
import { TabNav } from './TabNav';
import {Tab} from './Tab';

import './tabs.scss';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      selectedIndex: this.props.selectedIndex || 0
    };
  }

  clickTab = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedIndex !== prevState.selectedIndex) {
      return { selectedIndex: nextProps.selectedIndex };
    }

    return null;
  }

  render() {
    const { selectedIndex } = this.state;
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title || 'Tab');
    const contents = tabs.map(tab => tab.props.children);

    return (
      <section className="tab">
        <TabNav
          list={links}
          select={this.clickTab}
          activeIndex={selectedIndex}
        />
        <div>
          {contents[selectedIndex]}
        </div>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: ProptTypes.array
};
