import React from 'react';
import PropTypes from 'prop-types';

import getStringByLanguage from '../../helpers/strings';
import languageContext from '../../contexts/language-context';
import { useSuccess } from '../../contexts/success-context';
import { useGuessedWords } from '../../contexts/guessed-words-context';
import { getLetterMatchCount, getLettersInPlace } from '../../helpers';

const WordInput = ({ secretWord }) => {

  const [currentGuess, setCurrentGuess] = React.useState('');
  const language = React.useContext(languageContext);
  const [success, setSuccess] = useSuccess();
  const [guessedWords, setGuessedWords] = useGuessedWords();

  const onInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // TODO: check currentGuess (length, if exists and display warnings)
    if (currentGuess) {
      // update guessedWords context
      const lettersMatchCount = getLetterMatchCount(currentGuess, secretWord);
      const { lettersInPlaceCount } = getLettersInPlace(currentGuess, secretWord);
      setGuessedWords(guessedWords => [
          ...guessedWords,
          { guessedWord: currentGuess, lettersMatchCount, lettersInPlaceCount }
        ]
      );
      // update success context
      if (currentGuess === secretWord) {
        setSuccess(true);
      }
    }
    setCurrentGuess('');
  };

  if (success) return null;

  return (
    <section className="text-center" data-test="component-word-input">
      <form
        data-test="word-input-form"
        className="form-inline"
        onSubmit={onFormSubmit}>
        <div className="form-group mx-auto mb-2">
          <input
            data-test="word-input-box"
            className="form-control mx-sm-3"
            type="text"
            placeholder={getStringByLanguage(language, 'guessInputPlaceholder')}
            value={currentGuess}
            onChange={onInputChange}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary"
            type="submit">
            {getStringByLanguage(language, 'submit')}
          </button>
        </div>
      </form>
    </section>
  );
};

WordInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default WordInput;