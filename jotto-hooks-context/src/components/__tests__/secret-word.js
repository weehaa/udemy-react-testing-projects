import React from 'react';
import { mount } from 'enzyme';

import SecretWord from '../secret-word';

import { GuessedWordsProvider } from '../../contexts/guessed-words-context';
import { findByTestAttr } from '../../test-utils';

/**
 *
 * @param secretWord
 * @param guessedWords
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party', guessedWords = []) => {
  return mount(
    <GuessedWordsProvider value={[guessedWords, jest.fn()]}>
      <SecretWord secretWord={ secretWord } />
    </GuessedWordsProvider>
    );
}

test('SecretWord component renders with correct number of letters', () => {
  const wrapper = setup();
  const componentSecretWord = findByTestAttr(wrapper,'component-secret-word');
  const secretWordLetters = findByTestAttr(wrapper, 'secret-word-letter');
  expect(componentSecretWord.exists()).toBe(true);
  expect(secretWordLetters.length).toBe(5);
});

test('component shows matched letters correctly with given guessWords', () =>{
  const guessedWords = [
    { guessedWord: 'barby', letterMatchCount: 3 },
  ];
  const wrapper = setup('party', guessedWords);
  const componentSecretWord = findByTestAttr(wrapper,'component-secret-word');
  expect(componentSecretWord.text()).toBe(' ar y');
})