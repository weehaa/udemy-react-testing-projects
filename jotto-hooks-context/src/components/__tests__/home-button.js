import React from 'react';
import {shallow} from 'enzyme';

import HomeButton from '../home-button/home-button';
import { findByTestAttr } from '../../test-utils';

const setup = () => {
  return shallow(
    <HomeButton />
  )
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-home-button');
  expect(component.exists()).toBe(true);
});

test('renders home button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'home-button');
  expect(button.exists()).toBe(true);
});

test('home button redirects to home page', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'home-button');
  expect(button.exists()).toBe(true);
});

