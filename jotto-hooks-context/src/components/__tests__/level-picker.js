import React from 'react';
import { mount } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test-utils';

import LevelPicker from '../level-picker';
import { LanguageProvider } from '../../contexts/language-context';
import { string } from 'prop-types';

const mockSetLevel = jest.fn();

const setup = () => {
  return mount(
    <LanguageProvider>
      <LevelPicker level='medium' setLevel={mockSetLevel}/>
    </LanguageProvider>
  );
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-level-picker');
  expect(component.exists()).toBe(true);
});

test('does not throw error with expected props', () => {
  checkProps(LevelPicker, { level: string, setLevel: jest.fn() });
});

test('renders 3 levels', () => {
  const wrapper = setup();
  const levelEasy = findByTestAttr(wrapper, 'item-easy');
  expect(levelEasy.exists()).toBe(true);
  const levelMedium = findByTestAttr(wrapper, 'item-medium');
  expect(levelMedium.exists()).toBe(true);
  const levelHard = findByTestAttr(wrapper, 'item-hard');
  expect(levelHard.exists()).toBe(true);
});

test('call setLevel upon click', () => {
  const wrapper = setup();
  const levelHard = findByTestAttr(wrapper, 'item-hard');
  levelHard.first().simulate('click');
  expect(mockSetLevel).toHaveBeenCalled();
});
