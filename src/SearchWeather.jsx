import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./SearchWeather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [emptyInput, setEmptyInput] = useState("");

  //set API data
  function handleResponse(response) {
    const forecast = response.data;
    setWeather({
      ready: true,
      city: forecast.name,
      country: forecast.sys.country,
      temperature: forecast.main.temp,
      humidity: forecast.main.humidity,
      wind: forecast.wind.speed,
      feelslike: forecast.main.feels_like,
      description: forecast.weather[0].description,
      date: new Date(forecast.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  //Input form
  function handleInputChange(event) {
    setCity(event.target.value);
  }

  //Form
  function handleSubmitForm(event) {
    event.preventDefault();
    if (city === "") {
      setEmptyInput("please enter a city");
    } else {
      search();
    }
  }

  //call
  function search() {
    if (city !== "") {
      let key = "8161b4309ee03faae957729ba7104797";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;

      axios.get(apiUrl).then(handleResponse);
    }
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
      {emptyInput && <div className="alert alert-warning">{emptyInput}</div>}
      {weather && weather.ready ? (
        <WeatherInfo data={weather} />
      ) : (
        <p className="text-center mt-4">Loading...</p>
      )}
    </div>
  );
}
