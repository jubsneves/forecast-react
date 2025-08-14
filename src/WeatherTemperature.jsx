import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2 className="weather__temperature d-inline-flex align-items-start">
          {Math.round(props.celsius)}
          <span className="mt-2">
            °C {""}
            <a href="/" onClick={changeToFahrenheit}>
              | °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2 className="weather__temperature d-inline-flex align-items-start">
          {Math.round(fahrenheit())}
          <span className="mt-2">
            <a href="/" onClick={changeToCelsius}>
              °C {""}
            </a>
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
