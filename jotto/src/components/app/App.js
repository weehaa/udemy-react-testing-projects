import React, {Component} from 'react';
import {connect} from 'react-redux';
import Congrats from '../congrats';
import GuessedWords from '../guessed-words';
import WordInput from '../word-input';

import {getSecretWord} from '../../actions';

import './App.css';

class App extends Component {
  render() {
    const {success, guessedWords, secretWord} = this.props;
    return (
      <div className="container">
        <h1 className="text-center">Jotto</h1>
        <WordInput/>
        <Congrats success={success}/>
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = ({success, guessedWords, secretWord}) => {
  return {success, guessedWords, secretWord};
};

export default connect(mapStateToProps, {getSecretWord})(App);
