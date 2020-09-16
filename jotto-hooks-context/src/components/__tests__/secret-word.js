import React from 'react';
import { mount } from 'enzyme';

import SecretWord from '../secret-word';

import { GuessedWordsProvider } from '../../contexts/guessed-words-context';
import { SuccessProvider } from '../../contexts/success-context';

import { findByTestAttr } from '../../test-utils';

/**
 *
 * @param secretWord
 * @param guessedWords
 * @param level
 * @param setSuccess
 * @returns {ShallowWrapper}
 */
const setup = (
  secretWord = 'party',
  guessedWords = [],
  level = 'medium',
  setSuccess = jest.fn()) => {
  return mount(
    <SuccessProvider value={[false, setSuccess]}>
        <GuessedWordsProvider value={[guessedWords, jest.fn()]}>
          <SecretWord level={level} secretWord={secretWord}/>
        </GuessedWordsProvider>
    </SuccessProvider>
  );
};

test('SecretWord component renders with correct number of letters', () => {
  const wrapper = setup();
  const componentSecretWord = findByTestAttr(wrapper, 'component-secret-word');
  const secretWordLetters = findByTestAttr(wrapper, 'secret-word-letter');
  expect(componentSecretWord.exists()).toBe(true);
  expect(secretWordLetters.length).toBe(5);
});

test('component shows matched letters correctly with given guessWords at medium level', () => {
  const guessedWords = [
    { guessedWord: 'barby', letterMatchCount: 3 },
  ];
  const wrapper = setup('party', guessedWords);
  const componentSecretWord = findByTestAttr(wrapper, 'component-secret-word');
  expect(componentSecretWord.text()).toBe(' ar y');
});

test('component shows matched letters correctly with given guessWords at easy level', () => {
  const guessedWords = [
    { guessedWord: 'chair', letterMatchCount: 3 },
  ];
  const wrapper = setup('party', guessedWords, 'easy');
  const componentSecretWord = findByTestAttr(wrapper, 'component-secret-word');
  expect(componentSecretWord.text()).toBe(' ar  ');
});

test('component shows matched letters correctly with given guessWords at hard level', () => {
  const guessedWords = [
    { guessedWord: 'chair', letterMatchCount: 3 },
  ];
  const wrapper = setup('party', guessedWords, 'hard');
  const componentSecretWord = findByTestAttr(wrapper, 'component-secret-word');
  expect(componentSecretWord.text()).toBe('     ');
});

test('component shows all letters and runs setSuccess when all letters are guessed', () => {
  const guessedWords = [
    { guessedWord: 'ytrap', letterMatchCount: 3 },
  ];
  const mockSetSuccess = jest.fn().mockReturnValue('test');
  const wrapper = setup('party', guessedWords, 'easy', mockSetSuccess);
  const componentSecretWord = findByTestAttr(wrapper, 'component-secret-word');
  expect(componentSecretWord.text()).toBe('party');
  expect(mockSetSuccess).toHaveBeenCalledWith(true);
});
