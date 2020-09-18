import React, { useContext } from 'react';
import propTypes from 'prop-types';

import languageContext from '../../contexts/language-context';

import getStringByLanguage from '../../helpers/strings';
import DropdownSelect from '../dropdown-select';

/**
 * @function LevelPicker component for the level selection
 * @param level
 * @param {function} setLevel - setLevel method from ancestors
 * @returns {JSX.Element}
 */
const LevelPicker = ({ level, setLevel }) => {
  const [language] = useContext(languageContext);
  const levels = getStringByLanguage(language, 'levels');
  const defaultLevelIdx = Object.keys(levels).indexOf(level);

  const levelItems = Object.entries(levels).map(
    ([id, { name, icon }]) => (
      {
        id,
        name,
        image: require('./'+ icon),
      })
  );

  return (
    <section className="mb-2" data-test="component-level-picker">
      <DropdownSelect
        items={levelItems}
        selectedItemIdx={defaultLevelIdx}
        onSelect={setLevel}
      />
    </section>
  );
};

LevelPicker.propTypes = {
  setLevel: propTypes.func.isRequired,
};

export default LevelPicker;