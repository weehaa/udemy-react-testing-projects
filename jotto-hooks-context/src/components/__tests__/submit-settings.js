import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from '../../test-utils';

import { LanguageProvider } from '../../contexts/language-context';
import { SubmitSettingsWithoutRouter } from '../submit-settings';

const mockHistoryPush = jest.fn();
const setup = () => {
  return mount(
    <LanguageProvider>
      <SubmitSettingsWithoutRouter history={{ push: mockHistoryPush }}/>
    </LanguageProvider>
  );
};

describe('rendering', () => {

  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-submit-settings');
    expect(component.exists()).toBe(true);
  });

  test('renders submit button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'submit-button');
    expect(button.exists()).toBe(true);
  });
});

describe('behaviour on user actions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('submit button click redirects to the game page', () => {
    // console.log(location.href);
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'submit-button');
    button.first().simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/game');
  });

});
