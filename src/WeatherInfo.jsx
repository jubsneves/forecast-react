import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherMapIcon from "./WeatherMapIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div>
        <div className="d-flex flex-row justify-content-between align-items-center my-4">
          <div className="col-8">
            <h1 className="h1">
              {props.data.city}, {props.data.country}
            </h1>
            <h5 className="weather__description text-capitalize">
              <FormattedDate date={props.data.date} />
              {props.data.description}
            </h5>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-end">
            <div>
              <WeatherMapIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center my-4">
          <div className="weather__details d-flex flex-row align-items-center">
            <span className="weather__icon weather__icon--wind"></span>
            <div>
              <span>{Math.round(props.data.wind)}km/h</span>
              <p>wind</p>
            </div>
          </div>
          <div className="weather__details d-flex flex-row align-items-center">
            <span className="weather__icon weather__icon--humidity"></span>
            <div>
              <span>{Math.round(props.data.humidity)}%</span>
              <p>humidity</p>
            </div>
          </div>
          <div className="weather__details d-flex flex-row align-items-center">
            <span className="weather__icon weather__icon--feels-like"></span>
            <div>
              <span>{Math.round(props.data.feelslike)}°</span>
              <p>feels like</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
