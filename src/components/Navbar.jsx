import "../css/navbar.css"
import { useState } from 'react';
import Logo from "/logo/logo2.jpg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbars">
      <div className="navbar-container">
          <a href="/">
            <img src={Logo} alt="logo" />
            <h1 className="logo">Little Angel{"'"}s Academy</h1>
          </a>
        <div className="icon">
        </div>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : 'hide'}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/our_teachers" className="nav-link" onClick={toggleMenu}>Our Teachers</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar