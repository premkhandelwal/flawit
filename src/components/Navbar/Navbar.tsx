import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo_transparent.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth < 768) {
        setToggleMenu(false);
      }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [screenWidth])

  return (
    <nav className={`nav ${screenWidth < 768 ? 'responsive' : ''}`}>
      <div className="heading">
        <img className="brandLogo" src={logo} alt="Company Logo" />
        <h4 className="brandName">flawIT</h4>
      </div>

      {screenWidth < 768 && (
        <button onClick={toggleNav} className="menu-icon">
          <i className={`material-icons ${toggleMenu ? 'close' : ''}`}>menu</i>
        </button>
      )}

      {screenWidth < 768 && toggleMenu && (
        <ul className={`nav-links show-links`}>
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="pages/about.html">About</a>
          </li>
          <li>
            <a href="pages/services.html">Services</a>
          </li>
          <li>
            <a href="pages/contact.html">Contact</a>
          </li>
        </ul>
      )}

      {screenWidth >= 768 && (
        <ul className={`nav-links`}>
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="pages/about.html">About</a>
          </li>
          <li>
            <a href="pages/services.html">Services</a>
          </li>
          <li>
            <a href="pages/contact.html">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
