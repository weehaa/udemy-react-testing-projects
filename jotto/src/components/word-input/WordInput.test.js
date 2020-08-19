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
      const initialState={ success: false };
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

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('`guessedWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessedWordProp = wrapper.instance().props.guessWord;
    expect(guessedWordProp).toBeInstanceOf(Function);
  });
});



