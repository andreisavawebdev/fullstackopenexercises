import React from 'react';

const ShowCountry = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]} </p>
      <p>Continent: {country.region}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt='' />
    </div>
  );
};

export default ShowCountry;
