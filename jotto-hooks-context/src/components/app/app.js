import React from 'react';
import './app.css';
import hookActions from '../../actions/hookActions';

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
      return {...state, secretWord: action.payload};
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    {secretWord: ''}
  );

  const setSecretWord = (secretWord) =>
    dispatch({type: 'setSecretWord', payload: secretWord});

  React.useEffect(
    () => {
      hookActions.getSecretWord(setSecretWord)
        .then(() => {
        });
    }, []
  );

  return (
    <section className="App" data-test="component-app">
      <header className="App-header">
        <h1 className="display-2 text-center mt-4">Jotto</h1>
      </header>
    </section>
  );
}

export default App;
