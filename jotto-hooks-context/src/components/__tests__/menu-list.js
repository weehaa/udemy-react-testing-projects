import React from 'react';
import { shallow } from 'enzyme';
import MenuList from '../menu-list';
import { findByTestAttr } from '../../test-utils';

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
      <MenuList menuRowComponents={menuRowComponents} />
  )
}

test('renders 2 rows with provided setup data', () => {
  const wrapper = setup(menuRowComponents);
  const menuRows = findByTestAttr(wrapper, 'component-menu-row');
  expect(menuRows.length).toBe(2);
})