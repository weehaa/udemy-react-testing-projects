import React from 'react';
import PropTypes from 'prop-types';

import './GiveUp.css';

/**
 * Functional component for failure message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null (if 'success' prop is false)
 */
const GiveUp = (props) => {
  const renderMessage = () => {
    return (
      <div data-test="give-up-message" className="give-up alert alert-danger my-3">
        The secret word was <strong>{props.secretWord}</strong>
        <br/>
        Better luck next time!
      </div>
    );
  };

  return (
    <section data-test="component-give-up">
      {props.isGiveUp ? renderMessage() : null}
    </section>
  );
};

GiveUp.propTypes = {
  isGiveUp: PropTypes.bool.isRequired,
  secretWord: PropTypes.string,
};

export default GiveUp;
