import React from 'react';

import guessedWordsContext from '../../contexts/guessed-words-context';
import  { useLangStrings } from '../../contexts/language-context';

const GuessedWords = () => {
  const langStrings = useLangStrings();
  const [guessedWords] = guessedWordsContext.useGuessedWords();

  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        {langStrings.guessPrompt}
      </span>
    );
  } else {
    // reverse the guessedWord array to show the latest guess at the top
    // Use the shallow copy to preserve mutating the original array
    let guessedWordsReversed = guessedWords.slice();
    guessedWordsReversed.reverse();
    const guessedWordsRows = guessedWordsReversed.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.lettersMatchCount}</td>
        <td>{word.lettersInPlaceCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>{langStrings.guessedWords}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
          <tr>
            <th>{langStrings.guessColumnHeader}</th>
            <th>{langStrings.matchingLettersColumnHeader}</th>
            <th>{langStrings.inPlaceLettersColumnHeader}</th>
          </tr>
          </thead>
          <tbody>
          {guessedWordsRows}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  );
};

export default GuessedWords;
