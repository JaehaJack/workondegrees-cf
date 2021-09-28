import React from "react";

export default function FormattedDate(props) {
  let year = props.dates.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.dates.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dates.getDay()];
  let hours = props.dates.getHours();
  if (hours < 10) {
    return `0${hours}`;
  }
  let minute = props.dates.getMinutes();
  if (minute < 10) {
    return `0${minute}`;
  }

  return (
    <div>
      {`${month} ${props.dates.getDate()}, ${year} ${day} ${hours}:${minute}`}
    </div>
  );
}
