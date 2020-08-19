import {actionTypes} from '../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @return {array} - new guessedWords state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, {...action.payload}];
    case actionTypes.SET_SECRET_WORD:
      return [];
    default:
      return state;
  }
}