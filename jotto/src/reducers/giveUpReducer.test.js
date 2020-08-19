import { actionTypes } from '../actions';
import giveUpReducer from './giveUpReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = giveUpReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action `GIVE_UP`', () => {
  const newState = giveUpReducer(undefined, { type: actionTypes.GIVE_UP });
  expect(newState).toBe(true);
});

test('returns state of false  upon receiving an action `SET_SECRET_WORD`', () => {
  const newState = giveUpReducer(undefined, { type: actionTypes.SET_SECRET_WORD });
  expect(newState).toBe(false);
});
