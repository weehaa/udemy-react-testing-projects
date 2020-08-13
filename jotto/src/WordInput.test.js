import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import WordInput from './input';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<WordInput store={store}/>).dive().dive();
  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });

    test('renders input box', () => {

    });

    test('renders submit button', () => {

    });
  });

  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });

    test('does not render input box', () => {

    });

    test('does not render submit button', () => {

    });
  });

});

describe('update state', () => {

});

