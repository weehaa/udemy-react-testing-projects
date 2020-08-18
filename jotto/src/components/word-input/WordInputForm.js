import React, {Component} from 'react';

class WordInputForm extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const guessedWord = this.state.inputValue;
    if (guessedWord && guessedWord.length > 0) {
      this.props.onSubmit(guessedWord);
      this.setState({
        inputValue: ''
      })
    }

  };

  render() {
    return (
      <form className="form-inline"
        data-test="component-word-input-form"
        onSubmit={this.onFormSubmit}
      >
        <div className="form-group mx-auto mb-2">
          <input
            data-test="word-input-box"
            className="form-control mx-sm-3"
            type="text"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            placeholder="enter a word to guess"/>
          <button
            data-test="submit-button"
            className="btn btn-primary"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default WordInputForm;