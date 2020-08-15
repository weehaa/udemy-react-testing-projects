import React, { Component } from 'react';
import { connect } from 'react-redux';



class WordInput extends Component {

  renderWordInputForm = () => {
    return (
      <form className="form-inline">
        <input
          data-test="word-input-box"
          className="mb-4 mx-sm-3"
          type="text"
          placeholder="enter a word to guess" />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit">
          Submit
        </button>
      </form>
    )
  };

  render() {
    return (
      <section data-test="component-word-input">
        { this.props.success ? null : this.renderWordInputForm() }
      </section>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(WordInput);

