import React, {Component} from 'react';
import {connect} from 'react-redux';
import WordInputForm from './WordInputForm';

import {guessWord, setGiveUp} from '../../actions';

class WordInput extends Component {

  render() {
    const {success, isGiveUp, guessWord, setGiveUp} = this.props;
    return (
      <section data-test="component-word-input" className="text-center">
        {
          // does not render word input if word was successfully guessed
          // or give up button was clicked
          success || isGiveUp ?
          null :
          <WordInputForm 
            onSubmit={guessWord}
            onGiveUp={setGiveUp}/>
        }
      </section>
    );
  }
}

const mapStateToProps = ({success}) => {
  return {success};
};

export default connect(mapStateToProps, {guessWord, setGiveUp})(WordInput);

