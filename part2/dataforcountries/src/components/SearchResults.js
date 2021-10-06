import React from 'react';
import ShowCountry from './ShowCountry';
import ShowWeather from './ShowWeather';

const SearchResults = ({ filter, setFilter, countries }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const handleShowClick = (event, country) => {
    event.preventDefault();
    setFilter(country.name.common);
  };

  if (filter === '') {
    return (
      <div>
        <p>Type something to start searching...</p>
      </div>
    );
  }

  if (filteredCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, try another filter</p>
      </div>
    );
  }

  if (filteredCountries.length === 1) {
    return (
      <div>
        <ShowCountry country={filteredCountries[0]} />
        <ShowWeather city={filteredCountries[0].capital[0]} />
      </div>
    );
  }

  if (filteredCountries.length === 0) {
    return (
      <div>
        <p>No countries found</p>
      </div>
    );
  }

  return (
    <div>
      {filteredCountries.map((country) => (
        <p key={country.name.common}>
          {country.name.common}{' '}
          <button onClick={(event) => handleShowClick(event, country)}>
            show
          </button>
        </p>
      ))}
    </div>
  );
};

export default SearchResults;
