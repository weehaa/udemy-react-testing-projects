import React from 'react';
import propTypes from 'prop-types';

import { languageStrings } from '../helpers/strings';

const LanguagePicker = ({ setLanguage }) => {
  const languageIcons = Object.entries(languageStrings).map(([lang, {symbol}]) =>
    <span
      data-test="language-icon"
      key={lang}
    >
      {symbol}
    </span>
  )

  return (
    <section data-test="component-language-picker">
      {languageIcons}
    </section>
  )
}

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
}

export default LanguagePicker;