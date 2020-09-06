import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test-utils';

import { SuccessProvider } from '../contexts/success-context';
import { GuessedWordsProvider } from '../contexts/guessed-words-context';

import WordInput from '../components/word-input';
import GuessedWords from '../components/guessed-words';

/**
 * Setup function for testing guess attempts on WordInput and GuessedWords components behaviour
 * @param {array} guessExamples
 * @param {string} secretWord
 * @returns {[*, ShallowWrapper, ShallowWrapper, ShallowWrapper]}
 */
const setup = (guessExamples = [], secretWord = 'party') => {
  const wrapper = mount(
    <GuessedWordsProvider>
      <SuccessProvider>
        <WordInput secretWord={secretWord}/>
        <GuessedWords/>
      </SuccessProvider>
    </GuessedWordsProvider>
  );

  const inputBox = findByTestAttr(wrapper, 'word-input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  // pre-populate guessedWords context by simulating word guess
  guessExamples.map(word => {
    const mockEvent = { target: { value: word } };
    inputBox.simulate('change', mockEvent);
    submitButton.simulate('submit');
  });

  return [wrapper, inputBox, submitButton];
};

describe('guess submitted', () => {
  let wrapper, inputBox, submitButton;

  describe('empty guessedWords table', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup([], 'party');
    });
    test('guessedWords table shows correct row number after incorrect guess', () => {
      const mockChangeEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockChangeEvent);
      submitButton.simulate('submit');
      const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsTableRows.length).toBe(1);
    })
  })

  describe('non-empty guessedWords', () => {

    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup(['agile'], 'party');
    });

    describe('correct guess', () => {
      beforeEach(() => {
        const mockChangeEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockChangeEvent);
        submitButton.simulate('submit');
      });

      test('Input form does not render on successful guess', () => {
        const wordInput = findByTestAttr(wrapper, 'component-word-input');
        expect(wordInput.exists()).toBe(false);
      });

      test('GuessedWords table row count reflects new guesses', () => {
        const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsTableRows.length).toBe(2);
      });
    });

    describe('incorrect guess', () => {
      beforeEach(() => {
        const mockChangeEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockChangeEvent);
        submitButton.simulate('submit');
      });

      test('Input form renders on unsuccessful guess', () => {
        const wordInput = findByTestAttr(wrapper, 'component-word-input');
        expect(wordInput.exists()).toBe(true);
      });

      test('GuessedWords table row count reflects new guesses', () => {
        const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsTableRows.length).toBe(2);
      });
    });
  });
});