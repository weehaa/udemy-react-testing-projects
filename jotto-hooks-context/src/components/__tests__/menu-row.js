import React from 'react';
import { mount } from 'enzyme';

import { MenuRow } from '../menu-list';
import { findByTestAttr } from '../../test-utils';
import { LanguageProvider } from '../../contexts/language-context';

const testRow = {
  label: 'language',
  menuItem: <>test</>,
  hint: 'languageInfo'
};


/**
 * setup function to create a MenuRow wrapper
 * @returns {ShallowWrapper}
 */
const setup = ({ label, menuItem: item, hint }) => {
  return mount(
    <LanguageProvider>
      <table>
        <tbody>
          <MenuRow label={label} menuItem={item} hint={hint}/>
        </tbody>
      </table>
    </LanguageProvider>
  );
};

describe('rendering', () => {
  test('renders without errors', () => {
    const wrapper = setup(testRow);
    const component = findByTestAttr(wrapper, 'component-menu-row');
    expect(component.exists()).toBe(true);
  });

  test('renders label', () => {
    const wrapper = setup(testRow);
    const label = findByTestAttr(wrapper, 'menu-label');
    expect(label.exists()).toBe(true);
  });

  test('renders menu item', () => {
    const wrapper = setup(testRow);
    const item = findByTestAttr(wrapper, 'menu-item');
    expect(item.exists()).toBe(true);
  });

  test('renders menu hint', () => {
    const wrapper = setup(testRow);
    const hint = findByTestAttr(wrapper, 'menu-hint');
    expect(hint.exists()).toBe(true);
  });
});
