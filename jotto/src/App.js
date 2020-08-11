import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';

function App() {
  return (
    <div className="App">
      <GuessedWords />
      <Congrats />
    </div>
  );
}

export default App;
