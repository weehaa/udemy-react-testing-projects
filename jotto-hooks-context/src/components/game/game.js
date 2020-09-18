import React from 'react';
import './game.css';

import hookActions from '../../actions/hookActions';

import { useLangStrings } from '../../contexts/language-context';
import successContext from '../../contexts/success-context';
import { GuessedWordsProvider } from '../../contexts/guessed-words-context';

import Spinner from '../spinner';
import WordInput from '../word-input';
import Congrats from '../congrats';
import GuessedWords from '../guessed-words';
import SecretWord from '../secret-word';

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
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

const Game = ({level}) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null }
  );
  const langStrings = useLangStrings();

  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  React.useEffect(
    () => {
      hookActions.getSecretWord(setSecretWord);
    }, []
  );

  if (!state.secretWord) return <Spinner/>;

  return (
    <section className="container text-center" data-test="component-game">
        <header className="app-header">
          <h1 className="display-4 text-center mt-4">
            {langStrings.name}
          </h1>
        </header>
        {/*<p>The secret word is {state.secretWord}</p>*/}
        <GuessedWordsProvider>
          <successContext.SuccessProvider>
            <SecretWord level={level} secretWord={state.secretWord}/>
            <Congrats/>
            <WordInput secretWord={state.secretWord}/>
          </successContext.SuccessProvider>
          <GuessedWords/>
        </GuessedWordsProvider>
    </section>
  );
};

export default Game;
