import React from 'react';
import { mount } from 'enzyme';

import { LanguageProvider } from '../../contexts/language-context';
import NavbarMenu from '../navbar-menu';

import { findByTestAttr } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';

/**
 *
 * @param {string} path - initial path
 * @returns {ShallowWrapper}
 */
const setup = (path = '/') => {
  return mount(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <NavbarMenu/>
      </LanguageProvider>
    </MemoryRouter>
  );
};

describe('rendering', () => {
  test('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-navbar-menu');
    expect(component.exists()).toBe(true);
  });

  test('renders home button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'navbar-menu-home');
    expect(button.exists()).toBe(true);
  });

  test('renders login button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'navbar-menu-login');
    expect(button.exists()).toBe(true);
  });


});

describe('Class `active-link` adds to nav buttons', () => {
  test('login button is active when location is `login` ', () => {
    const wrapper = setup('/login');
    const loginButton = findByTestAttr(wrapper, 'navbar-menu-login');
    // console.log(loginButton.debug());
    expect(loginButton.last().hasClass('active-link')).toBe(true);
  });

  test('home button is active when location is `/` ', () => {
    const wrapper = setup('/');
    const loginButton = findByTestAttr(wrapper, 'navbar-menu-home');
    // console.log(wrapper.debug());
    expect(loginButton.last().hasClass('active-link')).toBe(true);
  });
});

