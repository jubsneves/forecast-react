import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "./assets/d-clear-sky.png",
    "01n": "./assets/n-clear-sky.png",
    "02d": "./assets/d-few-clouds.png",
    "02n": "./assets/n-few-clouds.png",
    "03d": "./assets/scattered-clouds.png",
    "03n": "./assets/scattered-clouds.png",
    "04d": "./assets/broken-clouds.png",
    "04n": "./assets/broken-clouds.png",
    "09d": "./assets/shower-rain.png",
    "09n": "./assets/shower-rain.png",
    "10d": "./assets/d-rain.png",
    "10n": "./assets/n-rain.png",
    "11d": "./assets/thunderstorm.png",
    "11n": "./assets/thunderstorm.png",
    "13d": "./assets/snow.png",
    "13n": "./assets/snow.png",
    "50d": "./assets/d-mist.png",
    "50n": "./assets/n-mist.png",
  };

  const size = props.size || 60;

  return (
    <img
      src={codeMapping[props.code]}
      alt={props.alt}
      style={{ width: `${size}px` }}
    />
  );
}
