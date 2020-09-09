import React from 'react';
import './app.css';

import hookActions from '../../actions/hookActions';
import getStringByLanguage from '../../helpers/strings';

import languageContext from '../../contexts/language-context';
import successContext from '../../contexts/success-context';
import { GuessedWordsProvider } from '../../contexts/guessed-words-context';

import Spinner from '../spinner';
import WordInput from '../word-input';
import LanguagePicker from '../language-picker/language-picker';
import Congrats from '../congrats';
import GuessedWords from '../guessed-words';
import SecretWord from '../secret-word';
import LevelPicker from '../level-picker';

/**
 * Reducer to update state depending on action received
 * Called automatically by dispatch
 * @param state {object} - existing state
 * @param action {object} contains `type` and `payload` properties fot the state update
 *                          fot example { type: "setSecretWord, payload: "party" }
 * @return {object} - new state
 */
function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    case 'setLevel':
      return { ...state, level: action.payload };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null },
  );

  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  const setLanguage = (language) => {
    dispatch({ type: 'setLanguage', payload: language });
  };

  const setLevel = (level) => {
    dispatch({ type: 'setLevel', payload: level });
  };

  React.useEffect(
    () => {
      setLanguage('en');
      setLevel('medium');
      hookActions.getSecretWord(setSecretWord);
    }, []
  );

  if (!state.secretWord) return <Spinner/>;

  return (
    <main role="main" className="container text-center" data-test="component-app">
      <languageContext.Provider value={state.language}>
        <header className="app-header">
          <LanguagePicker setLanguage={setLanguage}/>
          <LevelPicker setLevel={setLevel}/>
          <p>
            Selected Level: {getStringByLanguage(state.language, 'levels')[state.level]}
          </p>
          <h1 className="display-4 text-center mt-4">
            {getStringByLanguage(state.language, 'name')}
          </h1>
        </header>
        {/*<p>The secret word is {state.secretWord}</p>*/}
        <GuessedWordsProvider>
          <successContext.SuccessProvider>
            <SecretWord secretWord={state.secretWord}/>
            <Congrats/>
            <WordInput secretWord={state.secretWord}/>
          </successContext.SuccessProvider>
          <GuessedWords/>
        </GuessedWordsProvider>
      </languageContext.Provider>
    </main>
  );
};

export default App;
