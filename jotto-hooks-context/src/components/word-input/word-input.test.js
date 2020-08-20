import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../test/test-utils';

import WordInput from './';

/**
 * Setup function for WordInput component.
 * @return {ShallowWrapper}
 */
const setup = () => {
  return shallow(<WordInput/>);
};

test('WordInput renders without an error', () => {
  const wrapper = setup();
  const wordInput = findByTestAttr(wrapper, 'component-word-input');
  expect(wordInput.length).toBe(1);
})