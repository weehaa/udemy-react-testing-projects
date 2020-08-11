import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null (if 'success' prop is false)
 */

const Congrats = (props) => {
  const renderMessage = () => {
    return (
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    )
  }

  return (
    <div data-test="component-congrats">
      {props.success ? renderMessage() : null}
    </div>
  );
};

Congrats.defaultProps = {
  success: false
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
