import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from './components/SearchResults';
import SearchInput from './components/SearchInput';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <SearchInput filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Search Results</h2>
      <SearchResults
        filter={filter}
        setFilter={setFilter}
        countries={countries}
      />
    </div>
  );
};

export default App;
