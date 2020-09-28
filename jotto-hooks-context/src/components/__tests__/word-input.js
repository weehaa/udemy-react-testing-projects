import React from 'react';
import { mount } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test-utils';
import getStringByLanguage from '../../helpers/strings';

import WordInput from '../word-input';
import { LanguageProvider } from '../../contexts/language-context';
import { SuccessProvider } from '../../contexts/success-context';
import { GuessedWordsProvider } from '../../contexts/guessed-words-context';

const defaultProps = { secretWord: 'party' };

/**
 * Setup function for WordInput component.
 * @param {string} secretWord
 * @param {string} language
 * @param {string} success
 * @return {ShallowWrapper}
 */
const setup = (secretWord = 'party', language = 'en', success = false) => {
  return mount(
    <LanguageProvider value={[language, jest.fn()]}>
      <SuccessProvider value={[success, jest.fn()]}>
        <GuessedWordsProvider>
          <WordInput secretWord={secretWord}/>
        </GuessedWordsProvider>
      </SuccessProvider>
    </LanguageProvider>
  );
};

test('WordInput component renders without an error', () => {
  const wrapper = setup();
  const wordInput = findByTestAttr(wrapper, 'component-word-input');
  expect(wordInput.length).toBe(1);
});

test('does not render WordInput component when success is truthy', () => {
  const wrapper = setup('party', 'en', true);
  expect(wrapper.isEmptyRender()).toBe(true);
});

test('does not throw an error with expected props', () => {
  checkProps(WordInput, defaultProps);
});

describe('error Alert', () => {
  const wrapper = setup();
  const inputBox = findByTestAttr(wrapper, 'word-input-box');
  const inputForm = findByTestAttr(wrapper, 'word-input-form');

  test('does not render Alert when the guess is the same length as a secret word', () => {
    // create a mock event and apply it to the change event on the input box
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    inputForm.simulate('submit', {
      preventDefault() {
      }
    });
    const alert = findByTestAttr(wrapper, 'error-alert');
    expect(alert.exists()).toBe(false);
  });

  test('Renders Alert when the guess is not the same length as a secret word', () => {
    // create a mock event and apply it to the change event on the input box
    const mockEvent = { target: { value: 'top' } };
    inputBox.simulate('change', mockEvent);
    inputForm.simulate('submit', {
      preventDefault() {
      }
    });
    const alert = findByTestAttr(wrapper, 'error-alert');
    expect(alert.exists()).toBe(true);
  });
});

describe('state controlled input field', () => {
  let wrapper;
  const mockSetCurrentGuess = jest.fn();

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    // replacing React useState with mock function
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('`setCurrentGuess` getting called with an empty string on submit', () => {
    const inputForm = findByTestAttr(wrapper, 'word-input-form');
    inputForm.simulate('submit', {
      preventDefault() {
      }
    });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'word-input-box');

    // create a mock event and apply it to the change event on the input box
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});

describe('test language context', () => {
  for (let lang of ['ru', 'en']) {
    test(`renders submit button in language: '${lang}'`, () => {
      const wrapper = setup('party', lang);
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      const expectedButtonText = getStringByLanguage(lang, 'submit');
      expect(submitButton.text()).toBe(expectedButtonText);
    });
  }
});