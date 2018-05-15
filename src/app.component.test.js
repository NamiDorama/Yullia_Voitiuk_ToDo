import { shallow } from 'enzyme';
import { AppComponent } from './app.component';
const noop = _=>_;

describe('<AppComponent />', () => {
  it('should render component with "div" tag', () => {
    const wrapper = shallow(<AppComponent getUser={noop} dispatch={noop} />);
    expect(wrapper.find('div.wrapper').length).toBe(1);
  })
});