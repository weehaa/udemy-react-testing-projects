import React from 'react';
import { mount } from 'enzyme';
import Home from '../home';
import { findByTestAttr } from '../../test-utils';
import { LanguageProvider } from '../../contexts/language-context';

const setup = () => {
  return mount(
    <LanguageProvider>
      <Home/>
    </LanguageProvider>
  );
};

describe('rendering', () => {
  test('renders home component', () => {
    const wrapper = setup();
    const componentHome = findByTestAttr(wrapper, 'component-home');
    expect(componentHome.exists()).toBe(true);
  });

  test('renders LanguagePicker', () => {
    const wrapper = setup();
    const languagePicker = findByTestAttr(wrapper, 'component-language-picker');
    expect(languagePicker.exists()).toBe(true);
  })

});