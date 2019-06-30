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
