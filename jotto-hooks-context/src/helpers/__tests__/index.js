import { getLettersInPlace, getLetterMatchCount } from '../index';

const secretWord = 'party';
describe('getLetterMatchCount', () => {
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('returns the correct count where there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});

describe('getLetterOnPlaceCount', () => {
  test('returns correct count and indices when there are no matching letters', () => {
    const { lettersInPlaceCount, lettersIndices } = getLettersInPlace('bones', secretWord);
    expect(lettersInPlaceCount).toBe(0);
    expect(lettersIndices.length).toBe(0);
  });

  test('returns correct count when there are 3 matching letters', () => {
    const { lettersInPlaceCount, lettersIndices } = getLettersInPlace('barby', secretWord);
    expect(lettersInPlaceCount).toBe(3);
    expect(lettersIndices).toEqual([1, 2, 4]);
  });

  test('returns correct count when there are duplicate letters in the guess', () => {
    const { lettersInPlaceCount, lettersIndices } = getLettersInPlace('parka', secretWord);
    expect(lettersInPlaceCount).toBe(3);
    expect(lettersIndices).toEqual([0, 1, 2]);
  });
});
