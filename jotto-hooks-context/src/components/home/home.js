import React from 'react';
import { useLangStrings } from '../../contexts/language-context';

import LanguagePicker from '../language-picker';

const Home = () => {
  const langStrings = useLangStrings();

  return (
    <section data-test="component-home" className="container text-center">
      <h2 className="display-4 text-center mt-4">
        {langStrings.name}
      </h2>
      <LanguagePicker />
    </section>
  )
}

export default Home;