import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Game from '../game';

import App from '../app';

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Game)).toHaveLength(0);
  expect(wrapper.text()).toBe('Page not found');
});