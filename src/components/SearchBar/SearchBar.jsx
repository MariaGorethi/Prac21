import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-bar__input"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-bar__button">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;