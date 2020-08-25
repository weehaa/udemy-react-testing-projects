import React from 'react';
import {mount} from 'enzyme';
import {findByTestAttr} from '../../test-utils';
import App from '../app';

import hooks from '../../actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for App component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  // clear mock to avoid any effect of previous tests
  mockGetSecretWord.mockClear();
  hooks.getSecretWord = mockGetSecretWord;

  // enzyme does not run useEffect on shallow
  // https://github.com/enzymejs/enzyme/issues/2086
  return mount(<App/>);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('`getSecretWord` get called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  })
})