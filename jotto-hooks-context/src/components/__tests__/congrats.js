import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from '../../test-utils';
import languageContext from '../../contexts/language-context';
import Congrats from '../congrats';

import getStringByLanguage from '../../helpers/strings';
import { SuccessProvider } from '../../contexts/success-context';

/**
* Factory function to create a ShallowWrapper for the Congrats component.
* @function setup
* @param {object} testValues - Component values specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = ({success, language }) => {
  success = success || false;
  language = language || 'en';
  return mount(
    <languageContext.Provider value={language} >
      <SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </SuccessProvider>
    </languageContext.Provider>
    );
}

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});


describe('LanguagePicker', () => {
  test('renders congrats message in english', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe(getStringByLanguage('en', 'congrats'));
  });

  test('correctly renders congrats text in russian', () => {
    const wrapper = setup({ success: true, language: 'ru' });
    expect(wrapper.text()).toBe(getStringByLanguage('ru', 'congrats'));
  });
});