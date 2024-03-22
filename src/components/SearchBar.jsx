// components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={query}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
