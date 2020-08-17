import React, {Component} from 'react';

class WordInputForm extends Component {
  state = {
    currentGuess: '',
  };

  onInputChange = (e) => {
    this.setState({
      currentGuess: e.target.value
    });
  };

  onFormSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    this.props.onSubmit(guessedWord);
  };

  render() {
    return (
      <form className="form-inline"
        data-test="component-word-input-form"
        onSubmit={this.onFormSubmit}
      >
        <input
          data-test="word-input-box"
          className="mb-4 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          onChange={this.onInputChange}
          placeholder="enter a word to guess"/>
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default WordInputForm;