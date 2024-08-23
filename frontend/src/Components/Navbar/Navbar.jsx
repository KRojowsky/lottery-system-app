import React from 'react';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.scss';
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaTiktok, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand">
        <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="member" smooth={true} offset={-100} duration={100} className="nav-link">
              Weź udział
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Status.pdf" target="_blank" rel="noopener noreferrer">
              Regulamin
            </a>
          </li>
          <li className="nav-item">
            <Link to="rules" smooth={true} offset={-100} duration={100} className="nav-link">
              Zasady loterii
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} offset={-100} duration={100} className="nav-link">
              Kontakt
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Więcej
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="https://mi-store.pl/newsletter.php" target='_blank'>Zapisz się do newslettera</a></li>
            </ul>
          </li>
        </ul>
        <div className="social-icons ms-auto">
          <a href="https://mi-store.pl/" aria-label="Shopping Cart" target='_blank'><FaShoppingCart /></a>
          <a href="https://www.facebook.com/mistorepolska/" aria-label="Facebook" target='_blank'><FaFacebookF /></a>
          <a href="https://www.instagram.com/mistorepl/" aria-label="Instagram" target='_blank'><FaInstagram /></a>
          <a href="https://www.tiktok.com/@mistorepl" aria-label="TikTok" target='_blank'><FaTiktok /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
