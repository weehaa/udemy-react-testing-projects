import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../test-utils';

import LanguagePicker from '../language-picker/language-picker';
import { LanguageProvider } from '../../contexts/language-context';

const mockSetLanguage = jest.fn();

const setup = () => {
  return mount(
    <LanguageProvider value={['en', mockSetLanguage]}>
      <LanguagePicker />
    </LanguageProvider>
    );
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.exists()).toBe(true);
});

test('renders language items', () => {
  const wrapper = setup();
  const langItemRu = findByTestAttr(wrapper, 'item-ru');
  expect(langItemRu.exists()).toBe(true);
  const langItemEn = findByTestAttr(wrapper, 'item-en');
  expect(langItemEn.exists()).toBe(true);
});

test('call setLanguage upon click on `ru` item', () => {
  const wrapper = setup();
  const langRuItem = findByTestAttr(wrapper, 'item-ru');
  langRuItem.first().simulate('click');
  expect(mockSetLanguage).toHaveBeenCalled();
  expect(mockSetLanguage).toHaveBeenCalledWith('ru');
});
