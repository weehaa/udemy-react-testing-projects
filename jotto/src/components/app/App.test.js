import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../../test/testUtils';

import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} state - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {
  const store = storeFactory(state);
  return shallow(<App store={store} />).dive().dive();
};

test('renders without error', () => {
  const wrapper = setup();
});

describe('redux properties', () => {
  test('has access to `success` piece of state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('has access to `secretWord` piece of state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    console.log(wrapper.instance().props);
    expect(secretWordProp).toBe(secretWord);
  });

  test('has access to guessedWords piece of state', () => {
    const guessedWords = [{ guessedWord: 'train', lettersMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });

  test('`getSecretWord` action creator is a functiom on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
});
