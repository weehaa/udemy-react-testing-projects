import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../../test-utils';

import WordInput from '../word-input';

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

describe('state controlled input field', () => {
  let wrapper;
  const mockSetCurrentGuess  = jest.fn();
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    // replacing React useState with mock function
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  test('`setCurrentGuess` getting called with an empty string on submit', () => {
    const inputForm = findByTestAttr(wrapper, 'word-input-form');
    inputForm.simulate('submit', {
      preventDefault() {
      }
    });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'word-input-box');

    // create a mock event and apply it to the change event on the input box
    const mockEvent = {target: {value: 'train'}};
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});