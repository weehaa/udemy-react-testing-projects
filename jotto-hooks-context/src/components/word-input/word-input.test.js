import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../../../test/test-utils';

import WordInput from './';


const defaultProps = {secretWord: 'party'};
/**
 * Setup function for WordInput component.
 * @return {ShallowWrapper}
 */
const setup = (props = {...defaultProps}) => {
  return shallow(<WordInput {...props}/>);
};

test('WordInput component renders without an error', () => {
  const wrapper = setup();
  const wordInput = findByTestAttr(wrapper, 'component-word-input');
  expect(wordInput.length).toBe(1);
});

test('does not throw an error with expected props', () => {
  checkProps(WordInput, defaultProps);
});