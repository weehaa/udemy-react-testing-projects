const languageStrings = {
  en: {
    symbol: 'English',
    flag: 'uk',
    name: 'Guess a word',
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guess',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matched',
    inPlaceLettersColumnHeader: 'In Place',
    levels: {
      easy: {name: 'Easy', icon: 'easy.svg'},
      medium: {name: 'Medium', icon: 'medium.svg'},
      hard: {name: 'Hard', icon: 'hard.svg'},
    },
    loginTitle: 'Login or create a new account with:',
    menuStrings: {
      submitButton: 'PLAY',
      languageInfo: {
        title: 'Game Language',
        content: `Here you can change the language of the game. 
      Surprise, yep? :-)`
      },
      levelInfo: {
        title: 'Level Info',
        content: `
        <ul class="level-info">
            <li><strong>Easy:</strong> Open All matched letters</li>
            <li><strong>Medium:</strong> Open matched letters in the same place</li>
            <li><strong>Hard:</strong> Open No letters</li>
        </ul>`
      },
      labels: {
        language: 'Language',
        level: 'Level',
      },
    },
    navStrings: {
      home: 'home',
      login: 'login'
    },
  },

  ru: {
    symbol: 'Русский',
    flag: 'ru',
    name: 'Угадай слово',
    congrats: 'Поздравляем! Вы угадали слово!',
    submit: 'Отправить',
    guessPrompt: 'Попробуй угадать секретное слово!',
    guessInputPlaceholder: 'Введите слово',
    guessedWords: 'Попытки',
    guessColumnHeader: 'Слово',
    matchingLettersColumnHeader: 'Совпадения',
    inPlaceLettersColumnHeader: 'На месте',
    levels: {
      easy: {name: 'Легкий', icon: 'easy.svg'},
      medium: {name: 'Средний', icon: 'medium.svg'},
      hard: {name: 'Сложный', icon: 'hard.svg'},
    },
    loginTitle: 'Выполните вход или создайте новый аккаунт с помощью:',
    menuStrings: {
      submitButton: 'ИГРАТЬ',
      languageInfo: {
        title: 'Язык игры',
        content: `Здесь Вы можете выбрать язык игры. 
        Неожиданно, да? :-)`
      },
      levelInfo: {
        title: 'Описание уровней',
        content: `
          <ul class="level-info">
              <li><strong>Легкий:</strong> Открываются все совпавшие буквы</li>
              <li><strong>Средний:</strong> Открываются совпавшие буквы, оказавшиеся на своем месте</li>
              <li><strong>Сложный:</strong> Буквы не открываются</li>
          </ul>`
      },
      labels: {
        language: 'Язык',
        level: 'Уровень',
      },
    },
    navStrings: {
      home: 'Меню',
      login: 'Вход'
    },
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
