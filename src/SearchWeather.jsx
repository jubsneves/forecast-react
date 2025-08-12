import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //API
  function displayResponse(response) {
    setLoaded(true);
    const forecast = response.data;
    setWeather({
      temperature: forecast.main.temp,
      humidity: forecast.main.humidity,
      wind: forecast.wind.speed,
      city: forecast.name,
      description: forecast.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    console.log(response.data);
  }

  //Input form
  function handleInputChange(event) {
    setCity(event.target.value);
  }

  //Form
  function handleSubmitForm(event) {
    event.preventDefault();
    let key = "8161b4309ee03faae957729ba7104797";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;

    axios.get(apiUrl).then(displayResponse);
  }

  let form = (
    <form onSubmit={handleSubmitForm} className="input-group">
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );

  return (
    <div>
      {form}
      {loaded ? (
        <div>
          <div>{Math.round(weather.temperature)}</div>
          <div>{weather.city}</div>
          <div>{Math.round(weather.wind)}</div>
          <div>{Math.round(weather.humidity)}</div>
          <div>{weather.description}</div>
          <img src={weather.icon} />
        </div>
      ) : null}
    </div>
  );
}
