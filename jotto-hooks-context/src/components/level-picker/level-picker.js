import React, {useContext} from 'react';
import propTypes from 'prop-types';

import languageContext from '../../contexts/language-context';

import getStringByLanguage from '../../helpers/strings';

/**
 * @function LevelPicker component for the level selection
 * @param {function} setLevel - setLevel method from ancestors
 * @returns {JSX.Element}
 */
const LevelPicker = ({ setLevel }) => {
  const language = useContext(languageContext);
  const levels = getStringByLanguage(language, 'levels');
  const levelsView = Object.entries(levels).map(([level, symbol]) =>
    <span
      data-test="level"
      key={level}
      onClick={() => setLevel(level)}
    >
      {symbol}
    </span>
  )

  return (
    <section data-test="component-level-picker">
      {levelsView}
    </section>
  )
}

LevelPicker.propTypes = {
  setLevel: propTypes.func.isRequired,
}

export default LevelPicker;