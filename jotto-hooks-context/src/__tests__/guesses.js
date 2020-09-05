import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test-utils';

import successContext from '../contexts/success-context';
import WordInput from '../components/word-input';

const setup = (secretWord = 'party') => {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <WordInput secretWord={secretWord}/>
    </successContext.SuccessProvider>
  );
  const inputBox = findByTestAttr(wrapper, 'word-input-box');
  const wordInputForm = findByTestAttr(wrapper, 'word-input-form');
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  return [wrapper, inputBox, wordInputForm, submitButton];
};

describe('guess submitted', () => {
  let wrapper, inputBox, wordInputForm, submitButton;
  beforeEach(() => {
    [wrapper, inputBox, wordInputForm, submitButton] = setup('party');
  });
  describe('correct guess', ()=> {
    beforeEach(() => {
      const mockChangeEvent = { target: { value: 'party'} };
      inputBox.simulate('change', mockChangeEvent);
      submitButton.simulate('submit');
    });

    test('Input form does not render on success', () => {
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('incorrect guess', () => {
    beforeEach(() => {
      const mockChangeEvent = { target: { value: 'train'} };
      inputBox.simulate('change', mockChangeEvent);
      submitButton.simulate('submit');
    });

    test('Input form renders on unsuccessful guess', () => {
      expect(wrapper.isEmptyRender()).toBe(false);
    });
  });

});