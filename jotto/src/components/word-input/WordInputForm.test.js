import React from 'react';
import { shallow } from 'enzyme';
import WordInputForm from './WordInputForm';

import { findByTestAttr } from '../../../test/testUtils';

const wrapper = shallow(<WordInputForm />);

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
