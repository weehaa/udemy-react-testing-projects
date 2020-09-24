import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { findByTestAttr } from '../../test-utils';

import Game from '../game';
import App from '../app';
import { LanguageProvider } from '../../contexts/language-context';

const setup = (path) => {
  return mount(
    <MemoryRouter initialEntries={[ path ]}>
      <LanguageProvider>
        <App/>
      </LanguageProvider>
    </MemoryRouter>
  );
}

describe('paths', () => {
  test('invalid path should redirect to 404', () => {
    const wrapper = setup('/random')
    expect(wrapper.find(Game)).toHaveLength(0);
    expect(wrapper.text()).toMatch(/Page not found/);
  });

  test('`/game` path should render Game component', () => {
    const wrapper = setup('/game');
    expect(wrapper.find(Game)).toHaveLength(1);
  });

  test('`/login` path should render Login component', () => {
    const wrapper = setup('/login');
    const componentLogin  = findByTestAttr(wrapper, 'component-login');
    expect(componentLogin.length).toBe(1);
  });

})
