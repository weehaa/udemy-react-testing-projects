import React from 'react';
import { shallow } from 'enzyme';
import MenuListTemp from '../menu-list';

const menuRowComponents = [
  {
    label: 'language',
    menuItem: <></>,
    hint: 'languageInfo' },
  {
    label: 'level',
    menuItem: <></>,
    hint: 'levelInfo'
  }
];

const setup = (menuRowComponents =[]) => {
  return shallow(
      <MenuListTemp menuRowComponents={menuRowComponents} />
  )
}

test('renders 2 rows with provided setup data', () => {
  const wrapper = setup(menuRowComponents);
  expect(wrapper.children().length).toBe(2);
})