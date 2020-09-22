import React from 'react';

import MenuList from '../menu-list';

import { useLangStrings } from '../../contexts/language-context';

import LanguagePicker from '../language-picker';
import LevelPicker from '../level-picker';
import SubmitSettings from '../submit-settings';

import './home.scss';

const Home = ({level, setLevel}) => {
  const menuRowComponents = [
    {
      label: 'language',
      menuItem: <LanguagePicker />,
      hint: 'languageInfo' },
    {
      label: 'level',
      menuItem: <LevelPicker level={level} setLevel={setLevel} />,
      hint: 'levelInfo'
    }
  ];

  const langStrings = useLangStrings();
  return (
    <section data-test="component-home" className="container text-center">
      <h2 className="display-4 text-center mt-4">
        {langStrings.name}
      </h2>
      <MenuList menuRowComponents={menuRowComponents} />
      <SubmitSettings />
    </section>
  )
}

export default Home;