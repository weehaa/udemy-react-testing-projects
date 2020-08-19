import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({guessedWords}) => {
  const renderInstructions = () => {
    return (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    );
  };

  const renderGuessedWordsTable = () => {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr key={word.guessedWord} data-test="guessed-word">
        <td>{index+1}</td>
        <td>{word.guessedWord}</td>
        <td>{word.lettersMatchCount}</td>
      </tr>
    ));
    return (
      <div data-test="guessed-words" className="col-md-4 offset-md-4 my-3">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Guessed Word</th>
            <th>Matching Letters Count</th>
          </tr>
          </thead>
          <tbody>
          {guessedWordsRows}
          </tbody>
        </table>
        <div>Total guesses: {guessedWords.length}</div>
      </div>

    );
  };

  return (
    <section data-test="component-guessed-words">
      {guessedWords.length ? renderGuessedWordsTable() : renderInstructions()}
    </section>
  );
};

GuessedWords.defaultProps = {
  guessedWords: []
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      guessedWord: PropTypes.string.isRequired,
      lettersMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;