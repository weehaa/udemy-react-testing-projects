import React,  { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    error: false
  }

  incrementCounter = () => {
    this.setState(({ counter }) => {
      return {
        counter: ++counter,
        error: false
      }
    });
  }

  decrementCounter = () => {
    this.setState(({ counter }) => {
      return { counter: --counter }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.counter < 0) {
      this.setState({
        counter: 0,
        error: true
      })
    }
  }

  renderError = () => {
    return (
      <p
        data-test="error-message"
        className="error"
      >
        The counter can't go below zero
      </p>
    );
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently: {this.state.counter}</h1>
        {this.state.error ? this.renderError() : null}
        <button
          data-test="increment-button"
          onClick={this.incrementCounter}
        >
          increment
        </button>
        <button
          data-test="decrement-button"
          onClick={this.decrementCounter}
        >
          decrement
        </button>
      </div>
    );
  }
}

export default App;
