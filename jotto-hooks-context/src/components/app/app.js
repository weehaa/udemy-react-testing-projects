import React from 'react';
import './app.css';
import hookActions from '../../actions/hookActions';
import languageContext from '../../contexts/language-context';


import Spinner from '../spinner';
import WordInput from '../word-input';
import LanguagePicker from '../language-picker/language-picker';

/**
 * Reducer to update state depending on action received
 * Called automatically by dispatch
 * @param state {object} - existing state
 * @param action { action } contains `type` and `payload` properties fot the state update
 *                          fot example { type: "setSecretWord, payload: "party" }
 * @return { object } - new state
 */
function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload }
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null },
  );

  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  const setLanguage = (language) => {
    dispatch({ type: 'setLanguage', payload: language });
  }

  React.useEffect(
    () => {
      hookActions.getSecretWord(setSecretWord);
    }, []
  );

  if (!state.secretWord) return <Spinner/>;

  return (
    <section className="container text-center" data-test="component-app">
      <languageContext.Provider value={state.language}>
        <header className="app-header">
          <LanguagePicker setLanguage={setLanguage} />
          <h1 className="display-2 text-center mt-4">Jotto</h1>
        </header>      
        <WordInput secretWord={state.secretWord}/>
      </languageContext.Provider>
    </section>
  );
}

export default App;
