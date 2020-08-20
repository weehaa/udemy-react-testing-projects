import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../test/test-utils';
import App from './';

/**
 * Setup function for App component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App/>);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});