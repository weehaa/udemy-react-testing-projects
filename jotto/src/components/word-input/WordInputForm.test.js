import React from 'react';
import {shallow} from 'enzyme';
import WordInputForm from './WordInputForm';

import {findByTestAttr} from '../../../test/testUtils';

const wrapper = shallow(<WordInputForm/>);

test('renders component without error', () => {
  const component = findByTestAttr(wrapper, 'component-word-input-form');
  expect(component.length).toBe(1);
});

test('renders input box', () => {
  const wordInputBox = findByTestAttr(wrapper, 'word-input-box');
  expect(wordInputBox.length).toBe(1);
});

test('renders submit button', () => {
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  expect(submitButton.length).toBe(1);
});

describe('`onSubmit` function calls', () => {
  let onSubmitMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    onSubmitMock = jest.fn();
    const props = {
      onSubmit: onSubmitMock,
    };
    wrapper = shallow(<WordInputForm {...props} />);

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord });

    //find the submit button and simulate a click
    const form = findByTestAttr(wrapper, 'component-word-input-form');
    form.simulate('submit', { preventDefault() {} });
  });

  test('onSubmit function runs on button click', () => {
    const onSubmitMockCount = onSubmitMock.mock.calls.length;
    expect(onSubmitMockCount).toBe(1);
  });

  test('calls onSubmit with input value as an argument', () => {
    const guessedWordArg = onSubmitMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord)
  });
});
