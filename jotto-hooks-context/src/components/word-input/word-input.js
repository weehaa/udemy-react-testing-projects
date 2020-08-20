import React from 'react';
import PropTypes from 'prop-types';

const WordInput = ({secretWord}) => {
  return (
    <section data-test="component-word-input"></section>
  );
};

WordInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default WordInput;