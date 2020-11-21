import axios, { CancelToken } from 'axios';

export const getSecretWord = async (setSecretWord, language, dictionary, wordLength, requestStatus) => {
  const dictionaryLevel = {
    'kid': 1,
    'adult': 2,
    'professor': 3
  };
  const level = dictionaryLevel[dictionary] || 2;
  const length = wordLength || 5;
  const url = `http://localhost:5050/api/v1/words/${language}/randomword?
  level=${level}&minlength=${length}&maxlength=${length}`;
  try {
    const response = await axios.get(url, {
      timeout: 4000,
      cancelToken: new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        requestStatus.cancel = c;
      }),
    });
    !requestStatus.isCanceled && setSecretWord(response.data.word);
  } catch (err) {
    console.log(err.response);
    if (!axios.isCancel(err)) throw err;
    console.log('Request cancelled');
  }
};

// default export for mocking convenience
export default {
  getSecretWord,
};
