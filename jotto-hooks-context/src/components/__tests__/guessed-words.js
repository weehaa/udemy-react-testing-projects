import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../test-utils';
import GuessedWords from '../guessed-words';

import guessedWordsContext from '../../contexts/guessed-words-context';

import getStringByLanguage from '../../helpers/strings';
import { LanguageProvider } from '../../contexts/language-context';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {array} guessedWords
 * @param {string} language
 * @returns {ShallowWrapper}
 */
const setup = (guessedWords = [], language='en') => {
  const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()]);
  guessedWordsContext.useGuessedWords = mockUseGuessedWords;
  return mount(
    <LanguageProvider value={[language, jest.fn()]}>
      <GuessedWords />
    </LanguageProvider>
  )
};

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup( []);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup(guessedWords);
  });
  test ('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });
  test('correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});

describe('correctly renders in different languages', () => {
  test('renders instructions in english', () => {
    const wrapper = setup([]);
    const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(guessInstructions.text()).toBe(getStringByLanguage('en', 'guessPrompt'));
  });

  test('renders instructions in russian', () => {
    const wrapper = setup([], 'ru');
    const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(guessInstructions.text()).toBe(getStringByLanguage('ru', 'guessPrompt'));
  });
});
