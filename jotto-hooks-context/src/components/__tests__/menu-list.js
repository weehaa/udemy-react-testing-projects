import React from 'react';
import { shallow } from 'enzyme';
import MenuList from '../menu-list';
import { findByTestAttr } from '../../test-utils';

const menuRowComponents = [
  {
    label: 'language',
    menuItem: <div>test</div>,
    hint: 'languageInfo' },
  {
    label: 'level',
    menuItem: <div>test</div>,
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
  console.log(wrapper.debug());
  const menuRows = findByTestAttr(wrapper, 'menu-list-row');
  expect(menuRows.length).toBe(2);
})