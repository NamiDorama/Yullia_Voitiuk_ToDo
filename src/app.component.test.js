import { shallow } from 'enzyme';
import { AppComponent } from './app.component';
const noop = _=>_;

describe('<AppComponent />', () => {
  it('should render component with "div" tag', () => {
    const wrapper = shallow(<AppComponent getUser={noop} dispatch={noop} />);
    expect(wrapper.find('div.wrapper').length).toBe(1);
  });

  it('should call dispatch() on didMount', () => {
    const fakeGetUser = jest.fn();
    const wrapper = shallow(<AppComponent getUser={fakeGetUser} />);
    expect(fakeGetUser).toHaveBeenCalled();
  });

  it('should call error() if props.error exists', () => {
    const wrapper = shallow(<AppComponent getUser={noop} dispatch={noop} />);
    const inst = wrapper.instance();

    inst.container = {
      error: jest.fn()
    };
    wrapper.setProps({setError: noop});
    wrapper.setProps({error: 'test'});

    expect(inst.container.error).toHaveBeenCalled();
  });

  it('should show Preloader if user is false', () => {
    const wrapper = shallow(<AppComponent getUser={noop} dispatch={noop} user={false} />);
    expect(wrapper.find('Preloader').length).toBe(1);
  });

  it('should show Pages if user is defined', () => {
    const wrapper = shallow(<AppComponent getUser={noop} dispatch={noop} user={{}} />);
    expect(wrapper.find('Pages').length).toBe(1);
  });
});