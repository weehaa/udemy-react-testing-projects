import React from 'react';
import PropTypes from 'prop-types';
import { useLangStrings } from '../../contexts/language-context';
import { useSuccess } from '../../contexts/success-context';
import { useGuessedWords } from '../../contexts/guessed-words-context';
import { getLetterMatchCount, getLettersInPlace } from '../../helpers';
import { Alert } from 'react-bootstrap';

import './word-input.scss';

const WordInput = ({ secretWord }) => {
  const [errorText, setErrorText] = React.useState('');
  const [currentGuess, setCurrentGuess] = React.useState('');
  const langStrings = useLangStrings();
  const [success, setSuccess] = useSuccess();
  const [, setGuessedWords] = useGuessedWords();

  const onInputChange = (event) => {
    setErrorText('');
    setCurrentGuess(event.target.value);
  };

  /**
   * Validates currentGuess and sets error text
   * @returns {boolean} is input valid
   */
  const validateForm = () => {
    // TODO: check currentGuess (length, if exists and display warnings)
    if (currentGuess.length !== secretWord.length) {
      setErrorText(
        langStrings.invalidLength.replace('#number#', secretWord.length)
      );
      return false;
    }
    return true;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formValid = validateForm();
    if (!formValid) {
      setCurrentGuess('');
      return;
    }

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
            className="form-control mx-sm-3 mb-2"
            type="text"
            placeholder={
              langStrings.guessInputPlaceholder.replace('#number#', secretWord.length)
            }
            value={currentGuess}
            onChange={onInputChange}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary  mb-2"
            type="submit">
            {langStrings.submit}
          </button>
        </div>
      </form>
      <ErrorAlert errorText={errorText}/>
    </section>
  );
};

const ErrorAlert = ({ errorText }) => {
  if (!errorText) return null;
  return (
    <Alert
      data-test="error-alert"
      className="mx-auto"
      variant="danger">
      {errorText}
    </Alert>
  );
};


WordInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default WordInput;