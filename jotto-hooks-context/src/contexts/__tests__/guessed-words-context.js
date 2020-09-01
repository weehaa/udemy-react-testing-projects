import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessedWordsProvider, useGuessedWords } from '../../contexts/guess-word-context';

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  useGuessedWords();
  return <div/>;
}

test ('useGuessedWords throws an error when not wrapped in GuessedWordsProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow('useGuessedWords context must be used within the Provider')
})

test ('useGuessedWords does not throw an error when wrapped in GuessedWordsProvider', () => {
  expect(() => {
    mount (
      <GuessedWordsProvider>
        <FunctionalComponent />
      </GuessedWordsProvider>
    )
  }).not.toThrow();
})

