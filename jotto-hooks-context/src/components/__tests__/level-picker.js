import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test-utils';

import LevelPicker from '../level-picker';

const mockSetLevel = jest.fn();

const setup = () => {
  return shallow(<LevelPicker setLevel={mockSetLevel} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-level-picker');
  expect(component.exists()).toBe(true);
});

test('does not throw error with expected props', () => {
  checkProps(LevelPicker, { setLevel: jest.fn() });
});

test('renders 3 levels', () => {
  const wrapper = setup();
  const levels = findByTestAttr(wrapper, 'level');
  expect(levels.length).toBe(3);
});

test('call setLevel prop upon click', () => {
  const wrapper = setup();
  const levels = findByTestAttr(wrapper, 'level');

  const firstIcon = levels.first();
  firstIcon.simulate('click');

  expect(mockSetLevel).toHaveBeenCalled();
});
