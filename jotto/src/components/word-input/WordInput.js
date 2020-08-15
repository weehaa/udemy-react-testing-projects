import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordInputForm from './WordInputForm';

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

export default connect(mapStateToProps)(WordInput);

