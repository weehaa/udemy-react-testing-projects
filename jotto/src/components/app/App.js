import React, {Component} from 'react';
import {connect} from 'react-redux';
import Congrats from '../congrats';
import GuessedWords from '../guessed-words';
import WordInput from '../word-input';
import PropTypes from 'prop-types';

import {getSecretWord} from '../../actions';

import './App.css';

export class UnconnectedApp extends Component {

  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    const {success, guessedWords, secretWord} = this.props;
    return (
      <article className="container text-center mt-5" >
        <h1 className="text-center">Jotto</h1>
        <div className="mb-2">The secret word is <strong>{secretWord}</strong></div>
        <WordInput/>
        <Congrats success={success}/>
        <GuessedWords guessedWords={guessedWords}/>
      </article>
    );
  }
}

const mapStateToProps = ({success, guessedWords, secretWord}) => {
  return {success, guessedWords, secretWord};
};

UnconnectedApp.propTypes = {
  //from connect:
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string,
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      lettersMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  getSecretWord: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
