import getStringByLanguage, { getDefaultLanguage } from '../strings';

// fake strings object to test getStringByLanguage function
const strings = {
  en: { submit: 'submit' },
  ru: { submit: 'Отправить'},
  fr: {},
}

describe('language string testing', () => {
  const mockWarn = jest.fn();
  const originalWarn  = console.warn;

  beforeEach(() => {
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  })

  test('returns correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('returns correct submit string for russian', () => {
    const string = getStringByLanguage('ru', 'submit', strings);
    expect(string).toBe('Отправить');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test('returns english submit string when the language does not exist', () => {
    const string = getStringByLanguage('notALanguage', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith('Could not get string [submit] for language [notALanguage]');
  });

  test('returns english submit string when submit key does not exist for language', () => {
    const string = getStringByLanguage('fr', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith('Could not get string [submit] for language [fr]');
  });
});
