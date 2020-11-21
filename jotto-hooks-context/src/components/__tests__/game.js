import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../test-utils';
import Game from '../game';

import hookActions from '../../actions/hookActions';
import { LanguageProvider } from '../../contexts/language-context';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for Game component.
 * @param secretWord {string}
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
  // clear mock to avoid any effect of previous tests
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord
    .mockReturnValue(new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Whoops!')), 100);
    }));

  React.useReducer = jest.fn()
    .mockReturnValue([
      { secretWord, error: false, retry: false },
      jest.fn(),
    ]);

  // enzyme does not run useEffect on shallow
  // https://github.com/enzymejs/enzyme/issues/2086
  return mount(
    <LanguageProvider>
      <Game level='medium' dictionary='adult'/>
    </LanguageProvider>,
  );
};

test('Game renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-game');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('`getSecretWord` get called on Game mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on Game update', () => {
    const wrapper = setup();
    // need to clear the mock after game mount
    mockGetSecretWord.mockClear();
    // wrapper update() does not trigger update
    // issue forked from http://github.com/airbnb/enzyme/issues/2019
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });

  test('renders game when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-game');
    expect(appComponent.exists()).toBe(true);
  });
  test('does not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe('secretWord not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });

  test('does not render game when secretWord  not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-game');
    expect(appComponent.exists()).toBe(false);
  });

  test('renders spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'component-spinner');
    expect(spinnerComponent.exists()).toBe(true);
  });
});