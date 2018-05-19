import {Form, FormComponent} from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  it('should set state according to data from props', () => {
    const wrapper = shallow(<FormComponent />);
    const testVal = 'test';
    wrapper.setProps({ data: { email: testVal } });
    expect(wrapper.state().email).toEqual({ value: testVal });
  });
});