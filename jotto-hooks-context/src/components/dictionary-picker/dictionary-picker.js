import React, { useContext } from 'react';
import propTypes from 'prop-types';

import languageContext from '../../contexts/language-context';

import getStringByLanguage from '../../helpers/strings';
import DropdownSelect from '../dropdown-select';

/**
 * @function DictionaryPicker component for dictionary selection
 * @param dictionary
 * @param {function} setDictionary - setDictionary method from ancestors
 * @returns {JSX.Element}
 */
const DictionaryPicker = ({ dictionary, setDictionary }) => {
  const [language] = useContext(languageContext);
  const dictionaries = getStringByLanguage(language, 'dictionaries');
  const selectedDictIdx = Object.keys(dictionaries).indexOf(dictionary);

  const dictionaryItems = Object.entries(dictionaries).map(
    ([id, name]) => ({ id, name, image: require('./' + id + '.svg') })
  );

  return (
    <section data-test="component-dictionary-picker">
      <DropdownSelect
        items={dictionaryItems}
        selectedItemIdx={selectedDictIdx}
        onSelect={setDictionary}
      />
    </section>
  );
};

DictionaryPicker.propTypes = {
  dictionary: propTypes.string.isRequired,
  setDictionary: propTypes.func.isRequired,
};

export default DictionaryPicker;