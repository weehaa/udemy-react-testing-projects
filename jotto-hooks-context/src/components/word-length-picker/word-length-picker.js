import React, { useContext } from 'react';
import propTypes from 'prop-types';
import languageContext from '../../contexts/language-context';

import getStringByLanguage from '../../helpers/strings';

import DropdownSelect from '../dropdown-select';

/**
 * @function component for word length selection
 * @param wordLength
 * @param {function} setWordLength - setWordLength method from ancestors
 * @returns {JSX.Element}
 */
const WordLengthPicker = ({ wordLength, setWordLength }) => {
  const [language] = useContext(languageContext);
  const wordLengths = getStringByLanguage(language, 'wordLengths');
  const selectedIdx = Object.keys(wordLengths).indexOf(wordLength);
  // create array of items for the dropdown
  const wordLengthItems = Object.entries(wordLengths).map(
    ([id, name]) => ({ id, name })
  );

  return (
    <section data-test="component-wordLength-picker">
      <DropdownSelect
        items={wordLengthItems}
        selectedItemIdx={selectedIdx}
        onSelect={setWordLength}
      />
    </section>
  );
};

WordLengthPicker.propTypes = {
  wordLength: propTypes.string.isRequired,
  setWordLength: propTypes.func.isRequired,
};

export default WordLengthPicker;