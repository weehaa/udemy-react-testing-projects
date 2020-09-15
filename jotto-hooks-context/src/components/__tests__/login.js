import React from 'react';
import { LanguageProvider } from '../../contexts/language-context';

import { mount } from 'enzyme';

import Login from '../login';
import { findByTestAttr } from '../../test-utils';

const setup = () => {
  return mount (
    <LanguageProvider>
      <Login />
    </LanguageProvider>
  );
}

test('component renders at least 3 login variants', () => {
  const wrapper = setup();
  const loginButtons = findByTestAttr(wrapper, 'login-button');
  expect(loginButtons.length).toBeGreaterThanOrEqual(3);
})