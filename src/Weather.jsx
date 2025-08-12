import React from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Weather(props) {
  function displayResponse(response) {
    console.log(response.data.main.temp);
  }

  let key = "8161b4309ee03faae957729ba7104797";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=${units}`;

  axios.get(apiUrl).then(displayResponse);

  return (
    <div>
      <h1>Hello</h1>
      <ClipLoader
        color="white"
        loading={1}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
