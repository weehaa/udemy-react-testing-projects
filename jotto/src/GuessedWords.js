import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  const renderInstructions = () => {
    return (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  };

  const renderGuessedWordsTable = () => {
    const guessedWordsRows = guessedWords.map((word) => (
        <tr key={word.guessedWord} data-test="guessed-word">
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      ));
    return (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
          <tr>
            <th>Guessed Word</th>
            <th>Matching Letters Count</th>
          </tr>
          </thead>
          <tbody>
          {guessedWordsRows}
          </tbody>

        </table>
      </div>
    );
  };

  return (
    <section data-test="component-guessed-words">
      { guessedWords.length ? renderGuessedWordsTable() : renderInstructions() }
    </section>
  );
};

GuessedWords.defaultProps = {
  guessedWords: []
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired,
  )
};






export default GuessedWords;