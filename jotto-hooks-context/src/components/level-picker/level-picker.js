import React, { useContext } from 'react';
import propTypes from 'prop-types';

import languageContext from '../../contexts/language-context';

import getStringByLanguage from '../../helpers/strings';
import DropdownSelect from '../dropdown-select';

// levels: {
//   easy: {name: 'Easy', icon: '?'},
//   medium: {name: 'Medium', icon: '??'},
//   hard: {name: 'Hard', icon: '???'},
// }

/**
 * @function LevelPicker component for the level selection
 * @param {function} setLevel - setLevel method from ancestors
 * @returns {JSX.Element}
 */
const LevelPicker = ({level, setLevel }) => {
  const [language] = useContext(languageContext);
  const levels = getStringByLanguage(language, 'levels');

  const defaultLevelIdx = Object.keys(levels).indexOf(level);
  const levelItems = Object.entries(levels).map(([level, { name, icon }]) => (
      {
        id: level,
        name: name,
        image: icon,
      }
    )
  );

  return (
    <DropdownSelect
      data-test="component-level-picker"
      items={levelItems}
      selectedItemIdx={defaultLevelIdx}
      onSelect={setLevel}
    />
  );
};

LevelPicker.propTypes = {
  setLevel: propTypes.func.isRequired,
};

export default LevelPicker;