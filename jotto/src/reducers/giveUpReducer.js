import { actionTypes } from '../actions';

/**
 * @function giveUpReducer
 * @param {boolean} state - Current giveUp state.
 * @param {object} action - action to be reduced.
 * @return {boolean} - new giveUp state.
 */
export default (state=false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;
    case actionTypes.SET_SECRET_WORD:
      return false;
    default:
      return state;
  }
}