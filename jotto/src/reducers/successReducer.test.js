import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action `CORRECT_GUESS', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});

test('returns state of false  upon receiving an action `SET_SECRET_WORD`', () => {
  const newState = successReducer(undefined, { type: actionTypes.SET_SECRET_WORD });
  expect(newState).toBe(false);
});

