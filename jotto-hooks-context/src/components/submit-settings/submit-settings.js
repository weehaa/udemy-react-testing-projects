import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { useLangStrings } from '../../contexts/language-context';

import './submit-settings.scss';

const SubmitSettings = ({ history }) => {
  const buttonName = useLangStrings()['submitButton'];
  return (
    <section data-test='component-submit-settings'>
      <Button
        data-test='submit-button'
        className='mt-4 submit-button'
        onClick={() => {
          history.push('/game');
        }}
      >
        {buttonName}
      </Button>
    </section>
  );
};

// for unit testing
export { SubmitSettings as SubmitSettingsWithoutRouter };

export default withRouter(SubmitSettings);