import React from 'react';

import { useLangStrings } from '../../contexts/language-context';
import { useSuccess } from '../../contexts/success-context';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = () => {
  const [success] = useSuccess();
  const langStrings = useLangStrings();
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          { langStrings.congrats }
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );
  }
};

export default Congrats;
