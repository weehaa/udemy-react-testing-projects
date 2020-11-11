import React from 'react';

import './error-indicator.css';
import icon from './fail.png';

const ErrorIndicator = ({ message }) => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">Error</span>
      <span>
        {message || 'something has gone wrong'}
      </span>
    </div>
  );
};

export default ErrorIndicator;
