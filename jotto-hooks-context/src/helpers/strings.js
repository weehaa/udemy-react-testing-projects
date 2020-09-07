export const languageStrings = {
  en: {
    symbol: 'English',
    name: 'The Guess Race',
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
    inPlaceLettersColumnHeader: 'Letters in Place'
  },
  ru: {
    symbol: 'Русский',
    name: 'Угадайская гонка',
    congrats: 'Поздравляем! Вы угадали слово!',
    submit: 'Отправить',
    guessPrompt: 'Попробуй угадать секретное слово!',
    guessInputPlaceholder: 'Введите слово',
    guessedWords: 'Таблица Ваших попыток',
    guessColumnHeader: 'Слово',
    matchingLettersColumnHeader: 'Совпадения',
    inPlaceLettersColumnHeader: 'На своем месте'
  }
}

function getStringByLanguage(languageCode, stringKey, strings=languageStrings) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for language [${languageCode}]`);

    // fall back to english
    return strings.en[stringKey];
  }
  //
  return strings[languageCode][stringKey];
}

export default getStringByLanguage;
