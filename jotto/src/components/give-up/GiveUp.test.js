import React from 'react';
import {shallow} from 'enzyme';

import {checkProps, findByTestAttr} from '../../../test/testUtils';
import GiveUp from './';

const defaultProps = {isGiveUp: false, secretWord: 'party'};

/**
 * Factory function to create a ShallowWrapper for the GiveUp component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GiveUp {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-give-up');
  expect(component.length).toBe(1);
});

test('renders no text when `isGiveUp` prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-give-up');
  expect(component.text()).toBe('');
});

test('renders non-empty text when `isGiveUp` prop id true', () => {
  const wrapper = setup({isGiveUp: true});
  const message = findByTestAttr(wrapper, 'give-up-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = {isGiveUp: false, secretWord: 'party'};
  checkProps(GiveUp, expectedProps);
});
