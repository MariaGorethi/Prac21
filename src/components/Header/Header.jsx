import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, onSearch }) => {
  return (
    <header className="header">
      <div className="header__logo">Mi Tienda</div>
      <nav className="header__nav">
        <ul className="header__nav-links">
          <li className="header__nav-item"><Link to="/">Inicio</Link></li>
          <li className="header__nav-item"><Link to="/Productos">Tienda On Line</Link></li>
          
          <li className="header__nav-item"><Link to="/Contacto">Contacto</Link></li>
          <li className="header__nav-item"><Link to="/compras">Mis compras</Link></li>
          <li className="header__nav-item"><Link to="/devoluciones">Devoluciones</Link></li>
        </ul>
      </nav>
      <SearchBar onSearch={onSearch} />
      <div className="header__cart">
        <span className="header__cart-count">{cartCount}</span>
        <Link to="/cart" className="header__cart-icon">🛒</Link>
      </div>
    </header>
  );
};

export default Header;
