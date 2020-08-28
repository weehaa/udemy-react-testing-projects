import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../test-utils';
import App from '../app';

import hookActions from '../../actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for App component.
 * @param secretWord {string}
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party', language = 'en') => {
  // clear mock to avoid any effect of previous tests
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord, language },
      jest.fn()
    ]);
  React.useReducer = mockUseReducer;
  // enzyme does not run useEffect on shallow
  // https://github.com/enzymejs/enzyme/issues/2086
  return mount(<App/>);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('`getSecretWord` get called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    // need to clear the mock after app mount
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

  test('renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
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

  test('does not render app when secretWord  not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  });

  test('renders spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'component-spinner');
    expect(spinnerComponent.exists()).toBe(true);
  });
});