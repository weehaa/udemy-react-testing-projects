import React from 'react';
import PropTypes from 'prop-types';

import { useGuessedWords } from '../../contexts/guessed-words-context';
import { useSuccess } from '../../contexts/success-context';

import { getLettersInPlace } from '../../helpers';

import './secret-word.css';

/**
 * The component shows "grey" panes of secretWord letters
 * the pane will show the letter if the guessedWord letter matches and sitting in the same place
 *
 * @param {string} level
 * @param {string} secretWord
 * @returns {React.Component}
 */
const SecretWord = ({ level, secretWord }) => {
  // initially fill in the panes with spaces
  const initialLetters = Array(secretWord.length).fill(' ');
  const [letters, setLetters] = React.useState(initialLetters);

  const [guessedWords] = useGuessedWords();
  const [success, setSuccess] = useSuccess();

  React.useEffect(() => {
    if (letters.join('') === secretWord && !success) {
      setSuccess(true);
    }
  }, [letters, secretWord, success, setSuccess])

  React.useEffect(() => {
    if (!guessedWords.length) return;
    // update the shown letters state using the last guess
    const { guessedWord } = guessedWords[guessedWords.length-1];

    switch (level) {
      case 'easy':
        // show any matched letter
        setLetters(letters =>
          letters.map((letter, index) =>
            guessedWord.split('').includes(secretWord[index]) ? secretWord[index] : letter
          )
        );
        break;
      case 'medium':
        // show only matched letters in their own places
        const { lettersInPlaceCount, lettersIndices } = getLettersInPlace(guessedWord, secretWord);
        if (!lettersInPlaceCount) return;
        setLetters(letters =>
          letters.map((letter, index) =>
            lettersIndices.includes(index) ? secretWord[index] : letter
          )
        );
        break;
      // do not show any letters on hard level
      default: return;
    }
  },[guessedWords, secretWord, level])

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

SecretWord.propTypes = {
  level: PropTypes.string.isRequired,
  secretWord: PropTypes.string.isRequired
}

export default SecretWord;