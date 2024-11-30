import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    const toggleMenu = () => {
      hamburger.classList.toggle('hamActive');
      navMenu.classList.toggle('hamActive');
    };

    const closeMenu = () => {
      hamburger.classList.remove('hamActive');
      navMenu.classList.remove('hamActive');
    };

    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('.nav-item').forEach((close) => {
      close.addEventListener('click', closeMenu);
    });

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', toggleMenu);
      }

      document.querySelectorAll('.nav-item').forEach((close) => {
        close.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="header">
          <span className="rotate">The</span>
          <h1 className="siren">Siren</h1>
        </div>
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                to="/"
                className="navlink"
                style={({ isActive }) => ({ color: isActive ? 'orangered' : 'white' })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/bollywood"
                className="navlink"
                style={({ isActive }) => ({ color: isActive ? 'orangered' : 'white' })}
              >
                Bollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/technology"
                className="navlink"
                style={({ isActive }) => ({ color: isActive ? 'orangered' : 'white' })}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/hollywood"
                className="navlink"
                style={({ isActive }) => ({ color: isActive ? 'orangered' : 'white' })}
              >
                Hollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Fitness"
                className="navlink"
                style={({ isActive }) => ({ color: isActive ? 'orangered' : 'white' })}
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Food"
                className="navlink"
                style={({ isActive }) => ({ color: isActive ? 'orangered' : 'white' })}
              >
                Food
              </NavLink>
            </li>
          </ul>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
