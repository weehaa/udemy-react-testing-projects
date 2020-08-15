export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *  and (CONDITIONALY) CORRECT_GUESS action
 *  @function guessWord
 * @param {string} guessWord = Guessed word.
 * @return {function} - Redux Thunk function.
 */
export const guessWord = (guessWord) => {
  return function (dispatch, getState) {

  }
};