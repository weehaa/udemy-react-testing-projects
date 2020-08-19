import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {boolean} state - Current state of successful guess.
 * @param {object} action - action to be reduced.
 * @return {boolean} - new success state.
 */
export default (state = false, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    case actionTypes.SET_SECRET_WORD:
      return false;
    default:
      return state;
  }
}