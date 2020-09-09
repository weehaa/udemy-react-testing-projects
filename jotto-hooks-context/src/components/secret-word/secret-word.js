import React from 'react';
import { useGuessedWords } from '../../contexts/guessed-words-context';
import { getLettersInPlace } from '../../helpers';

import './secret-word.css';

/**
 * The component shows "grey" panes of secretWord letters
 * the pane will show the letter if the guessedWord letter matches and sitting in the same place
 *
 * @param {string} secretWord
 * @returns {React.Component}
 */
const SecretWord = ({ secretWord }) => {
  console.log(secretWord);
  // initially fill in the panes with spaces
  const initialLetters = Array(secretWord.length).fill(' ');
  const [letters, setLetters] = React.useState(initialLetters);

  const [guessedWords] = useGuessedWords();

  React.useEffect(() => {
    if (!guessedWords.length) return;
    // update the shown letters state using the last guess
    const { guessedWord } = guessedWords[guessedWords.length-1];
    const { lettersInPlaceCount, lettersIndices } = getLettersInPlace(guessedWord, secretWord);
    if ( !lettersInPlaceCount ) return;

    setLetters(letters =>
        letters.map((letter, index) =>
          lettersIndices.includes(index) ? secretWord[index] : letter
        )
    )
  },[guessedWords, secretWord])

  const secretWordLetters = letters.map((letter, index) => (
    <div
      data-test="secret-word-letter"
      className={`secret-letter mr-2 ${letter === ' ' ? null : 'matched'}`}
      key={index}
    >
      {letter}
    </div>
    )
  );

  return (
    <section data-test="component-secret-word" className="secret-word text-center mb-3">
      {secretWordLetters}
    </section>
  )
}

export default SecretWord;