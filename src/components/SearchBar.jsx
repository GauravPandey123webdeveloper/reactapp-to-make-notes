import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className='box3'>
    <h2>Add Note</h2>
    <label className='search' >
      <input className='st'
      type="text"
      placeholder="Search notes"
      value={searchTerm}
      onChange={handleChange}
    />Search</label>
  
    </div>
    
  );
};

export default SearchBar;
