import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <>
    <label htmlFor="text" ><button><i class="fa-solid fa-magnifying-glass"></i></button></label> 
    <input
      type="text"
      placeholder="Search Notes"
      onChange={(e) => onSearch(e.target.value)}
    />
    </>
  );
};

export default SearchBar;




