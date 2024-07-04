import React from 'react';
import './Navbar.css';

const Navbar = ({ setCategory, setCountry, darkMode, toggleDarkMode, setSource }) => {
  const resetSource = () => {
    setSource('');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className={`logo-text ${darkMode ? 'text-light' : 'text-dark'}`}>NEWS</span>
          <span className={`logo-text ${darkMode ? 'text-warning' : 'text-primary'}`}>App</span>
        </a>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link pointer" onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link pointer" onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link pointer" onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link pointer" onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link pointer" onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="dropdown me-3">
              <button className={`badge ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} dropdown-toggle pointer`} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </button>
              <ul className={`dropdown-menu dropdown-menu-end ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} aria-labelledby="dropdownMenuButton">
                <li><div className={`dropdown-item pointer ${darkMode ? 'text-light' : 'text-dark'}`} onClick={() => { setCountry("in"); resetSource(); }}>India</div></li>
                <li><div className={`dropdown-item pointer ${darkMode ? 'text-light' : 'text-dark'}`} onClick={() => { setCountry("us"); resetSource(); }}>America</div></li>
                <li><div className={`dropdown-item pointer ${darkMode ? 'text-light' : 'text-dark'}`} onClick={() => { setCountry("ca"); resetSource(); }}>Canada</div></li>
                <li><div className={`dropdown-item pointer ${darkMode ? 'text-light' : 'text-dark'}`} onClick={() => { setCountry("au"); resetSource(); }}>Australia</div></li>
              </ul>
            </div>
            <button className={`badge ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} pointer`} onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
