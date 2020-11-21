const languageStrings = {
  en: {
    symbol: 'English',
    flag: 'uk',
    name: 'Guess a word',
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'Enter a word of #number# letters',
    guessColumnHeader: 'Guess',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matched',
    inPlaceLettersColumnHeader: 'In Place',
    levels: {
      easy: {name: 'Easy', icon: 'easy.svg'},
      medium: {name: 'Medium', icon: 'medium.svg'},
      hard: {name: 'Hard', icon: 'hard.svg'},
    },
    dictionaries: {
      kid: 'Kid',
      adult: 'Adult',
      professor: 'Professor',
    },
    wordLengths: {
      4: '4 letters',
      5: '5 letters',
      6: '6 letters',
      7: '7 letters',
      8: '8 letters',
      9: '9 letters',
      10: '10 letters',
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

      dictionaryInfo: {
        title: 'Dictionary Info',
        content: `
        <ul class="level-info">
            <li><strong>Kid:</strong> Average dictionary of kid 4-7 years old </li>
            <li><strong>Adult:</strong> Average dictionary of adult person </li>
            <li><strong>Professor:</strong> Rarely used words</li>
        </ul>`
      },
      labels: {
        language: 'Language',
        level: 'Level',
        dictionary: 'Dictionary',
        wordLength: 'Word',
      },
    },
    navStrings: {
      home: 'home',
      login: 'login'
    },
    errors: {
      network: 'Did not get a response from server. Please, check internet connection',
    },
    retryButton: 'Retry',
    invalidLength: 'Your guess word length must be #number# letters!',
  },

  ru: {
    symbol: 'Русский',
    flag: 'ru',
    name: 'Угадай слово',
    congrats: 'Поздравляем! Вы угадали слово!',
    submit: 'Отправить',
    guessPrompt: 'Попробуй угадать секретное слово!',
    guessInputPlaceholder: 'Введите слово из #number# букв',
    guessedWords: 'Попытки',
    guessColumnHeader: 'Слово',
    matchingLettersColumnHeader: 'Совпало',
    inPlaceLettersColumnHeader: 'На месте',
    levels: {
      easy: {name: 'Легкий', icon: 'easy.svg'},
      medium: {name: 'Средний', icon: 'medium.svg'},
      hard: {name: 'Сложный', icon: 'hard.svg'},
    },
    dictionaries: {
      kid: 'Ребенок',
      adult: 'Взрослый',
      professor: 'Профессор',
    },
    wordLengths: {
      4: '4 буквы',
      5: '5 букв',
      6: '6 букв',
      7: '7 букв',
      8: '8 букв',
      9: '9 букв',
      10: '10 букв',
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
      dictionaryInfo: {
        title: 'Словарь',
        content: `
          <ul class="level-info">
              <li><strong>Ребенок:</strong> Простые слова, известные большинству детей до 10 лет</li>
              <li><strong>Взрослый:</strong> Более сложные слова, используемые в основном во взрослом возрасте</li>
              <li><strong>Профессор:</strong> Редко используемые слова</li>
          </ul>`
      },
      labels: {
        language: 'Язык',
        level: 'Уровень',
        dictionary: 'Словарь',
        wordLength: 'Слово'
      },
    },
    navStrings: {
      home: 'Меню',
      login: 'Вход'
    },
    errors: {
      network: 'Не получен ответ от сервера. Проверьте интерент соединение'
    },
    retryButton: 'Retry',
    invalidLength: 'В слове должно быть #number# букв!',
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
