import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast mt-5">
      <div className="d-flex justify-content-between w-100">


        <div className="position-relative">
          <div className="WeatherForecast__card d-flex flex-column flex-fill mx-1">
            <span className="WeatherForecast__icon">
              <WeatherIcon code="01d" size={40} />
            </span>
            <span className="WeatherForecast__day text-center mt-3">Tue</span>
            <span className="WeatherForecast__temperature text-center">
              <strong>20°C</strong> | 12°C{" "}
            </span>
          </div>
        </div>



      </div>
    </div>
  );
}
