import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ data }) {
    
  function Day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function MaxTemperature() {
    let temperature = Math.round(data.main.temp_max);
    return `${temperature}°`;
  }

  function MinTemperature() {
    let temperature = Math.round(data.main.temp_min);
    return `${temperature}°`;
  }

  return (
    <div className="position-relative">
      <div className="WeatherForecast__card d-flex flex-column flex-fill mx-1">
        <span className="WeatherForecast__icon">
          {data.weather.map((iconCode, i) => (
            <WeatherIcon key={i} code={iconCode.icon} size={40} />
          ))}
        </span>
        <span className="WeatherForecast__day text-center mt-3">{Day()}</span>
        <span className="WeatherForecast__temperature text-center">
          <strong>{MaxTemperature()}C</strong> | {MinTemperature()}C{" "}
        </span>
      </div>
    </div>
  );
}

{
  /* <div className="WeatherForecast__card d-flex flex-column flex-fill mx-1">
  <span className="WeatherForecast__icon">
    <WeatherIcon code={props.data.list[0].weather[0].icon} size={40} />
  </span>
  <span className="WeatherForecast__day text-center mt-3">{Day()}</span>
  <span className="WeatherForecast__temperature text-center">
    <strong>{MaxTemperature()}C</strong> | {MinTemperature()}C{" "}
  </span>
</div> */
}
