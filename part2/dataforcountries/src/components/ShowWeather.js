import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowWeather = ({ city }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, []);

  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>Temperature: {weather.main.temp}&deg; Celsius</p>
      <img src={iconUrl} alt='' />
      <p>Wind speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default ShowWeather;
