import React from 'react';

/**
 * Functional component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null (if 'success' prop is false)
 */

export default (props) => {
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
}