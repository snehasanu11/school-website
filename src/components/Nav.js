import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#nav">
            <img src="logo.avif" alt="home img" style={{ width: '50px', height: '50px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-5">
             
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/Academics">Academics</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/Admission">Admission</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/Faculty">Faculty</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/Students">Students</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
