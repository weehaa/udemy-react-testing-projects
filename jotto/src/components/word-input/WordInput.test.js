import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import WordInput from './WordInput';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  return shallow(<WordInput store={store}/>).dive().dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState= { success: false };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-word-input');
      expect(component.length).toBe(1);
    });
    test('renders WordInputForm component', () => {
      expect(wrapper.children().name()).toBe('WordInputForm');
    })
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    })
    test('does not render WordInputForm component', () => {
      expect(wrapper.children().length).toBe(0);
    })
  });

});

describe('update state', () => {

});

