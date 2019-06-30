import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PersonPost from '../components/personPost';

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

// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import PersonPost from '../components/personPost';
// import toJson from 'enzyme-to-json';

// describe('<PersonPost />', () => {
// it('onclick button posted name in "debug" mode with shallow', () => {
//   const component = shallow(<PersonPost debug />);
//   const button = component.find('button');
//   expect(component.find('.button').text()).toBe('No!');
//   button.simulate('click);
//   button.props().onClick();
//   expect(toJson(component)).toBe('Yes!');
// });
// it('returns No persons with hide props in "debug" mode with shallow', () => {
//   const component = shallow(<PersonPost debug hide={false} />);
//   expect(component.find('h3').length).toBe(1);
//   component.setProps({hide=true});
//   expect(component.get(0)).toBe('No persons');
//   // expect(component.get(0)).toBeNull();
// });
// it('input on change posted name in "debug" mode with shallow', () => {
//   const component = shallow(<PersonPost debug />);
//   const button = component.find('input');
//   expect(component.find('#myname')).text().toBe('');
//   component.simulate('change', {currentTarget: {value: 'Manuel'}});
//   expect(component.find('#myname')).text().toBe('Manuel');
// });
// it('update state in "debug" mode with shallow', () => {
//   const component = shallow(<PersonPost debug />);
//   expect(component.find('name').length).toBe('');
//   component.setState({name: 'Manuel'})
//   expect(component.find('name').length).toBe('Manuel');
// });

// it('should render posted name in "debug" mode with mount', () => {
//   const component = mount(<PersonPost debug />);
//   const button = component.find('submit');
//   console.log(button.debug());
//   button.props().onClick();
//   expect(toJson(component)).toMatchSnapshot();
// });
// it('should render posted name in "debug" mode with mount', () => {
//   const component = mount(<PersonPost debug />);
//   const button = component.find('submit');
//   console.log(button.debug());
//   button.props().onClick();
//   expect(toJson(component)).toMatchSnapshot();
// });
// it('should render posted name in "debug" mode with mount', () => {
//   const component = mount(<PersonPost debug />);
//   const button = component.find('submit');
//   console.log(button.debug());
//   button.props().onClick();
//   expect(toJson(component)).toMatchSnapshot();
// });
// it('should render posted name in "debug" mode with mount', () => {
//   const component = mount(<PersonPost debug />);
//   const button = component.find('submit');
//   console.log(button.debug());
//   button.props().onClick();
//   expect(toJson(component)).toMatchSnapshot();
// it('handsString timer in "debug" mode with shallow', () => {
//   const component = shallow(<PersonList debug />);
//   const returnTrue = PersonList.instance().handleStrings(`Hello Emmauel the time is ${Date().toLocaleTimeString()}`);
//   expect(returnTrue).toBe(true);
// });
// it('handsString timer in "debug" mode with shallow', () => {
//   const component = shallow(<PersonList debug />);
//   const returnTrue = PersonList.instance().handleStrings(`Hello Emmauel the time is ${Date().toLocaleTimeString()}`);
//   expect(returnTrue).toBe(true);
// });
// });
