import React from 'react';
import PropTypes from 'prop-types';

import languageContext from '../../contexts/language-context';
import getStringByLanguage from '../../helpers/strings';

const GuessedWords = (props) => {
  const language = React.useContext(languageContext);

  const getString = (key) => {
    return getStringByLanguage(language, key);
  }

  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        { getString('guessPrompt') }
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={ index }>
        <td>{ word.guessedWord }</td>
        <td>{ word.letterMatchCount }</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>{ getString('guessedWords') }</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>{getString('guessColumnHeader')}</th>
              <th>{ getString('matchingLettersColumnHeader')}</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
