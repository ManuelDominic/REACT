import React from 'react';
import { mount, shallow } from 'enzyme';
import PersonPost from '../components/personPost';
import toJson from 'enzyme-to-json';

describe('<PersonPost />', () => {
  it('should render correctly in "debug" mode with shallow', () => {
    const component = shallow(<PersonPost debug />);
    // expect(component).toMatchSnapshot();
    // expect(toJson(component).toMatchSnapshot();
    expect(component).toHaveLength(1);
  });
  it('should render class instance name in "debug" mode with shallow', () => {
    const component = shallow(<PersonPost name="emma" />);
    expect(component.instance().props.name).toBe('emma');
    // expect(component.props().input).toBe('emma');
  });
  it('should contain 1 label element in "debug" mode with shallow', () => {
    const component = shallow(<PersonPost />);
    expect(component.find('label').length).toBe(1);
    // expect(component.find('.className').length).toBe(true);
    // expect(component.find('form').children().length).toBe(2);
    // expect(component.find('form').hasClass('className')).toBe(true);
    // expect(component.find('h1').text()).toBe('Welcome home Emmanuel');
    // expect(component.find('#idName').text()).toBe('Welcome home Emmanuel');
    // expect(component.find('a[href="www.emmatest.com"]').text()).toBe('Welcome home Emmanuel');
    // expect(component.find('[text="emmatest"]').text()).toBe('Welcome home Emmanuel');
    // expect(component.find(function App(){ return ....}).text()).toBe('Welcome home Emmanuel');
    // expect(component.find({alt: 'logo'}).text()).toBe('Welcome home Emmanuel');
  });
  it('should render posted name in "debug" mode with mount', () => {
    const component = mount(<PersonPost debug />);
    expect(toJson(component)).toMatchSnapshot();
    component.unmount();
  });
});
