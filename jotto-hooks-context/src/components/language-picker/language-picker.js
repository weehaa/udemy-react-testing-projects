import React, { useContext } from 'react';
import languageContext from '../../contexts/language-context';
import DropdownSelect from '../dropdown-select';

import { getLanguages, getLanguageStrings } from '../../helpers/strings';


/**
 * @function LanguagePicker React component for the language selection
 * @returns {JSX.Element}
 */
const LanguagePicker = () => {
  const [language, setLanguage] = useContext(languageContext);
  const languages = getLanguages();
  const currentLangIdx = languages.indexOf(language);

  const languageItems = languages.map((lang) => {
    const { symbol, flag } = getLanguageStrings(lang);
    return {
      id: lang,
      name: symbol,
      image: require(`./${flag}.svg`),
    };
  });

  return (
    <section data-test="component-language-picker">
      <DropdownSelect
        className="d-inline-flex justify-content-between"
        items={languageItems}
        onSelect={setLanguage}
        selectedItemIdx={currentLangIdx}
      />
    </section>
  );
};

export default LanguagePicker;