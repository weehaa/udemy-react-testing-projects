import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordInputForm from './WordInputForm';

import { guessWord } from '../../actions';

class WordInput extends Component {

  render() {
    return (
      <section data-test="component-word-input">
        { this.props.success ? null : <WordInputForm />}
      </section>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(WordInput);

