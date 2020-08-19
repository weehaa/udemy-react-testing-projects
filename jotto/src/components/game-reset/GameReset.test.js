import React from 'react';
import {shallow} from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

import GameReset from './';

const setup = (props={}) => {
  return shallow(<GameReset {...props} />);
};

describe('renders component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({visible: true});
  });

  test('renders when success prop is true', () => {
    const component = findByTestAttr(wrapper, 'component-game-reset')
    expect(component.length).toBe(1);
  });

  test('renders `New Word` button', () => {
    const resetButton = findByTestAttr(wrapper, 'reset-button');
    expect(resetButton.length).toBe(1);
  });
});

test('`resetApp` function is called on button click', () => {
  const resetAppMock = jest.fn();
  const wrapper = setup({visible: true, resetApp: resetAppMock});
  const resetButton = findByTestAttr(wrapper, 'reset-button');
  resetButton.simulate('click');
  const resetAppMockCount = resetAppMock.mock.calls.length;
  expect(resetAppMockCount).toBe(1);
});



