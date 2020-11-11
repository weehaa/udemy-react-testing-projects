import axios, { CancelToken } from 'axios';

export const getSecretWord = async (setSecretWord, language, requestStatus) => {
  const level = 2;
  const minlength = 5;
  const maxlength = 5;
  const url = `http://localhost:5050/api/v1/words/${language}/randomword?
  level=${level}&minlength=${minlength}&maxlength=${maxlength}`;
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
    if (!axios.isCancel(err)) throw err;
    console.log('Request cancelled');
  }
};

// default export for mocking convenience
export default {
  getSecretWord,
};
