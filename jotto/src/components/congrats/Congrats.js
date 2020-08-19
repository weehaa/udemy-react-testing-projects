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
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-award mr-2" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"/>
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
