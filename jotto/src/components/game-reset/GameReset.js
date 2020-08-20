import React from 'react';

export default ({visible, resetApp}) => {
  const renderButton = () => {
    return (
      <button
        data-test="reset-button"
        className="reset-button btn btn-warning btn-lg mt-2"
        onClick={resetApp}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-clockwise mr-2" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
          <path fillRule="evenodd"
                d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
        </svg>
        Try another word!
      </button>
    );
  };

  return (
    <section data-test="component-game-reset" className="mt-2">
      {visible ? renderButton() : null}
    </section>
  );
};
