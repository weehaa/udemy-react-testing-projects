import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>

      </div>
    );
  }
}

export default App;
