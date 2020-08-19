import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const isGiveUp = false;
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord, isGiveUp };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          { guessedWord: unsuccessfulGuess, lettersMatchCount: 3 }
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord, lettersMatchCount: 5
        }]
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe('some guessed words', () => {
    const guessedWords = [ { guessedWord: 'agile', lettersMatchCount: 1 }];
    const initialState = { guessedWords, secretWord, isGiveUp };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, lettersMatchCount: 3 }
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, lettersMatchCount: 5 }
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});