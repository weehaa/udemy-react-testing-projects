const languageStrings = {
  en: {
    symbol: 'English',
    flag: 'uk',
    name: 'Guess a word',
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
    inPlaceLettersColumnHeader: 'Letters in Place',
    levels: {
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard'
    },
    loginTitle: 'Login or create a new account with:',
  },

  ru: {
    symbol: 'Русский',
    flag: 'ru',
    name: 'Угадай слово',
    congrats: 'Поздравляем! Вы угадали слово!',
    submit: 'Отправить',
    guessPrompt: 'Попробуй угадать секретное слово!',
    guessInputPlaceholder: 'Введите слово',
    guessedWords: 'Таблица Ваших попыток',
    guessColumnHeader: 'Слово',
    matchingLettersColumnHeader: 'Совпадения',
    inPlaceLettersColumnHeader: 'На своем месте',
    levels: {
      easy: 'Легкий',
      medium: 'Средний',
      hard: 'Сложный',
    },
    loginTitle: 'Выполните вход или создайте новый аккаунт с помощью:',
  },
};

function getStringByLanguage(languageCode, stringKey, strings = languageStrings) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for language [${languageCode}]`);

    // fall back to english
    return strings.en[stringKey];
  }
  //
  return strings[languageCode][stringKey];
}

export const getLanguageStrings = (languageCode, strings = languageStrings) => {
  if (!strings[languageCode]) {
    console.warn(`Could not get strings for language [${languageCode}]`);
  }
  return strings[languageCode];
};

export const getDefaultLanguage = () => {
  const defaultLanguage = 'en';
  const browserLanguage = window.navigator.language;
  if (!browserLanguage) return defaultLanguage;

  const browserLanguageCode = browserLanguage.substr(0, 2);
  const languageCodes = Object.keys(languageStrings);
  if (languageCodes.includes(browserLanguageCode)) return browserLanguageCode;
  return defaultLanguage;
};

export const getLanguages = () => {
  return Object.keys(languageStrings)
}

export default getStringByLanguage;
