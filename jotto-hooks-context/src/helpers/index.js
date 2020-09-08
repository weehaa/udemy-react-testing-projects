/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord);
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
};

/**
 *
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {{lettersInPlaceCount: number, lettersIndices: Array}}
 */
export const getLettersInPlace = (guessedWord, secretWord) => {
    let lettersInPlaceCount = 0;
    let lettersIndices = [];
    for (let i=0; i<secretWord.length; i++) {
        if (secretWord[i] === guessedWord[i]) {
            lettersInPlaceCount++;
            lettersIndices.push(i);
        }
    }
    return { lettersInPlaceCount, lettersIndices };
}