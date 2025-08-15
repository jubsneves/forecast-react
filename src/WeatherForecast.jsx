import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function load() {
    let key = "f5e814a04eddfab1740f07bf0328eee2";
    let units = "metric";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }

  if (loaded) {
    return (
      <div className="WeatherForecast mt-5">
        <div className="d-flex justify-content-between w-100">
          {forecast.list.map((day, i) => {
            if (i < 5) {
              return <WeatherForecastDay key={i} data={day} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
