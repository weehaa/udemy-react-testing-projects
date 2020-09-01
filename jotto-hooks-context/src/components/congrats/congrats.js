import React from 'react';

import languageContext from '../../contexts/language-context';
import getStringByLanguage from '../../helpers/strings';
import { useSuccess } from '../../contexts/success-context';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = () => {
  const [success] = useSuccess();
  const language = React.useContext(languageContext);
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          { getStringByLanguage(language, 'congrats') }
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
