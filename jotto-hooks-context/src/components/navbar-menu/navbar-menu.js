import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLangStrings } from '../../contexts/language-context';

import homeImg from './home.svg';
import loginImg from './login.svg';

import './navbar.scss';

const NavbarMenu = () => {
  const navStrings = useLangStrings()['navStrings'];

  const navLinks = [
    { icon: homeImg, link: '/', name: 'home' },
    { icon: loginImg, link: '/login', name: 'login' },
  ];

  const navItems = navLinks.map(({ icon, link, name }) =>
    <NavLink
      key={name}
      to={link}
      exact
      data-test={`navbar-menu-${name}`}
      activeClassName = "active-link"
      className="px-2 menu-nav-link"
    >
      <img width="32px" height="32px" src={icon} alt={name} className="my-2"/>
      <span className="ml-2 text-body text-decoration-none">{navStrings[name]}</span>
    </NavLink>
  );

  return (
    <nav
      className="d-flex justify-content-between align-middle text-capitalize"
      data-test="component-navbar-menu"
    >
      {navItems}
    </nav>
  );
};

export default NavbarMenu;