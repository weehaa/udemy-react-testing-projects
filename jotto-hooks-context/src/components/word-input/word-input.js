import React from 'react';
import PropTypes from 'prop-types';

const WordInput = ({secretWord}) => {

  const [currentGuess, setCurrentGuess] = React.useState('');

  const onInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // TODO: check currentGuess (length, if exists and display warnings)
    // TODO: update guessedWords context
    // TODO: check secretWord and optionally update success context
    setCurrentGuess('');
  };

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
            placeholder="enter guess word"
            value={currentGuess}
            onChange={onInputChange}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary"
            type="submit">
            Submit
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