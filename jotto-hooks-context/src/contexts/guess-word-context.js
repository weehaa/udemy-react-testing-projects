import React from 'react';

const guessedWordsContext = React.createContext([]);

/**
 * @function useGuessedWords to consume a `guessedWords` context.
 * @return {array} useGuessedWords value, which is a state of [value, setter].
 */
export const useGuessedWords = () => {
  const context = React.useContext(guessedWordsContext);

  //throw an error if the context is empty - means we aren't in a provider
  if (!context.length) {
    throw new Error('useGuessedWords context must be used within the Provider');
  }

  return context;
};


/**
 * @function GuessedWordsProvider  - provider for the GuessedWords context.
 * @param {object} props - props to pass through from declared component.
 * @returns {JSX.Element} Provider component.
 */
export const GuessedWordsProvider = (props) => {
  const [guessedWords, setGuessedWords] = React.useState([]);

  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords]);

  return <guessedWordsContext.Provider value={value} {...props} />;
};
