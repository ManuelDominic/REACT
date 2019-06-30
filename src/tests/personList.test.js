import React from 'react';
import { shallow } from 'enzyme';
import PersonList from '../components/personList';

describe('<PersonList />', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PersonList />);
    // expect(component).toMatchSnapshot();
    expect(component).toHaveLength(1);
  });
  it('calls componentDidMount in "debug" mode with shallow', () => {
    jest.spyOn(PersonList.prototype, 'componentDidMount')
    const component = shallow(<PersonList debug />);
    expect(PersonList.prototype.componentDidMount.mock.calls.length).toBe(1);
  });
});
