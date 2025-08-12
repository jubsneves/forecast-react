import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayResponse(response) {
    console.log(response.data.main.temp);
  }

  let key = "8161b4309ee03faae957729ba7104797";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=${units}`;

  axios.get(apiUrl).then(displayResponse);

  return <h1>Hello</h1>;
}
