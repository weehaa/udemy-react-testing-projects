import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../../test/testUtils';

import App, { UnconnectedApp } from './App';

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

const initialState = {
  success: true,
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
  secretWord: 'party'
};

test('has access to state and `getSecretWord` action creator', () => {
  const wrapper = setup(initialState);
  const appProps = wrapper.instance().props;
  const { success, guessedWords, secretWord, getSecretWord } = appProps;
  expect({ success, guessedWords, secretWord }).toEqual(initialState);
  expect(getSecretWord).toBeInstanceOf(Function);
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = { ...initialState, getSecretWord: getSecretWordMock};

  // set up component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
