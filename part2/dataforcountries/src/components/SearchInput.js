import React from 'react';

const SearchInput = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label>find countries </label>
      <input type='text' value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchInput;
