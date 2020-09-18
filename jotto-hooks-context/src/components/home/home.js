import React from 'react';
import { useLangStrings } from '../../contexts/language-context';

import LanguagePicker from '../language-picker';
import LevelPicker from '../level-picker';
import SubmitSettings from '../submit-settings';

import './home.scss';

const Home = ({level, setLevel}) => {
  const langStrings = useLangStrings();
  return (
    <section data-test="component-home" className="container text-center">
      <h2 className="display-4 text-center mt-4">
        {langStrings.name}
      </h2>
      <LanguagePicker />
      <LevelPicker level={level} setLevel={setLevel} />
      <SubmitSettings />
    </section>
  )
}

export default Home;