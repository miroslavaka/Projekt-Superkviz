import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './style.css';

const Menu = () => {
  return (
    <>
      <nav className="menu">
        {/* <a href="#" className="menu__link menu__link--active"> 
          Úvod
        </a>
        <a href="#" className="menu__link">
          Kvízy
        </a>
        <a href="#" className="menu__link">
          Žebříček
        </a>*/}
        <NavLink to="/" className="menu__link menu__link--active">
          Úvod
        </NavLink>
        <NavLink to="/kvizy" className="menu__link">
          Kvízy
        </NavLink>
        <NavLink to="/zebricek" className="menu__link">
          Žebříček
        </NavLink>
      </nav>
    </>
  );
};

export default Menu;
