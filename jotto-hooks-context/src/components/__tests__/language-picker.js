import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test-utils';

import LanguagePicker from '../language-picker';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.exists()).toBe(true);
});

test('does not throw error with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test('renders non-zero language icons', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');
  expect(languageIcons.length).toBeGreaterThan(0);
});

test('calla setLanguage prop upon click', () => {

});
