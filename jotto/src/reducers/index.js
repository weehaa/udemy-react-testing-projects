import {combineReducers} from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import isGiveUp from './giveUpReducer';

export default combineReducers({
  secretWord,
  success,
  guessedWords,
  isGiveUp,
});