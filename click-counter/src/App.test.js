import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @param {object} props
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search/
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  console.log(wrapper);
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain('0');
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  //find and check that the counter value increased
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('decrement button subtracts 1 from the counter', () => {
  const counter = 10;
  const wrapper = setup(null, { counter });

  //find decrement button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  //find the counter and check that it has decreased by 1
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

test('counter should not be below zero', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  //find decrement button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  //find the counter and check that it is equal to 0
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(0);
});

test('display an error message if the counter tries to go below zero', () => {
  const counter = -1;
  const wrapper = setup(null, { counter });

  // find error message
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(1);
});

test('clear the error when increment button is clicked', () => {
  const counter = -1;
  const wrapper = setup(null, { counter });

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find error message
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(0);

})