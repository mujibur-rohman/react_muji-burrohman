import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'blueviolet' : 'white',
      backgrounColor: isActive ? 'white' : 'blueviolet',
    };
  };
  return (
    <nav className={`container__sidebar ${openSideBar && 'open'}`}>
      <div className="arrow" onClick={() => setOpenSideBar(!openSideBar)}>
        {openSideBar ? <span>&larr;</span> : <span>&rarr;</span>}
      </div>
      <ul className="nav-list">
        <li>
          <NavLink style={navLinkStyles} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/about-app">
            About App
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-author" style={navLinkStyles}>
            About Author
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
