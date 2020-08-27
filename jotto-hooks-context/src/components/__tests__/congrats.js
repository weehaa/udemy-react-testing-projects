import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test-utils';
import languageContext from '../../contexts/language-context';
import Congrats from '../congrats';

import strings from '../../helpers/strings';

const defaultProps = { success: false };

/**
* Factory function to create a ShallowWrapper for the Congrats component.
* @function setup
* @param {object} testValues - Component values specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = ({ success, language }) => {
  success = success || false;
  language = language || 'en';
  return mount(
    <languageContext.Provider value={language} >
      <Congrats success={success} />
    </languageContext.Provider>
    );
}

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});

describe('LanguagePicker', () => {
  test('renders congrats message in english', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe(strings.getStringByLanguage('en', 'congrats'));
  });

  test('correctly renders congrats text in russian', () => {
    const wrapper = setup({ success: true, language: 'ru' });
    expect(wrapper.text()).toBe(strings.getStringByLanguage('ru', 'congrats'));
  });
});