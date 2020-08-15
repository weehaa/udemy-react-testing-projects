import React from 'react';

const WordInputForm = () => {
  return (
    <form className="form-inline" data-test="component-word-input-form">
      <input
        data-test="word-input-box"
        className="mb-4 mx-sm-3"
        type="text"
        placeholder="enter a word to guess" />
      <button
        data-test="submit-button"
        className="btn btn-primary mb-2"
        type="submit">
        Submit
      </button>
    </form>
  )
};

export default WordInputForm;