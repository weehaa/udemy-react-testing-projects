import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';
import WordInput from './WordInput';

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
