import React, { Component } from 'react';
import Congrats from '../congrats';
import GuessedWords from '../guessed-words';
import WordInput from '../word-input';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Jotto</h1>
        <WordInput />
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>

      </div>
    );
  }
}

export default App;
