import React from 'react';
import { mount, shallow } from 'enzyme';

import levelContext from '../level-context';


// a functional component that calls useLevel for our tests
const FunctionalComponent = () => {
  return <div>{React.useContext(levelContext)}</div>;
}

test ('Level context provides a `Medium` level by default', () => {
  const component = shallow(<FunctionalComponent/>)
  expect(component.text()).toBe('Medium');
})