import React from 'react';
import { IconEmail, IconFacebook, IconGoogle } from '../icons';

import { useLangStrings } from '../../contexts/language-context';

import './login.css';

const Login = () => {

  const langStrings = useLangStrings();

  const loginVariants = [
    { name: 'Google', Icon: IconGoogle, clazz: '' },
    { name: 'Facebook', Icon: IconFacebook, clazz: '' },
    { name: 'Email', Icon: IconEmail, clazz: '' },
  ];

  const loginButtons = loginVariants.map(({ name, Icon, clazz }) => (
    <button
      key={name}
      data-test="login-button"
      type="button"
      className="btn btn-outline-secondary mb-2 text-left">
      <Icon clazz={clazz}/>
      {name}
    </button>
  ));

  return (
    <section
      data-test="component-login"
      className="container text-center mt-5">
      <h4 className="mb-3">{langStrings.loginTitle}</h4>
      <div className="btn-group-vertical">
        {loginButtons}
      </div>
    </section>
  );
};

export default Login;