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
      <span data-test="congrats-message" className="alert alert-success">
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-award-fill mr-2" fill="gold"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
        </svg>
        Congratulations! You guessed the word!
      </span>
    );
  };

  return (
    <section data-test="component-congrats">
      {props.success ? renderMessage() : null}
    </section>
  );
};

Congrats.defaultProps = {
  success: false
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
