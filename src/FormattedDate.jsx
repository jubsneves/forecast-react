import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = props.date.getDay();
  let hours = props.date.getHours().toString().padStart(2, "0");
  let minutes = props.date.getMinutes().toString().padStart(2, "0");

  return `${days[day]}, ${hours}:${minutes} - `;
}
