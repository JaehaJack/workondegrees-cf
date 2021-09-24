import React from "react";

export default function WeatherForecastDay(props) {
  function Day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return day[days];
  }

  function maxTemperature(response) {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature(response) {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }

  function weatherIcon(response) {
    let iconUrl = response.data.weather[0].icon;

    return `${iconUrl}`;
  }

  return (
    <div>
      <div className="weatherForecastDay-day">{Day()}</div>
      <div className="weatherForecastDay-icon">{weatherIcon()}</div>
      <div className="weatherForecastDay-temperature">
        <span className="weatherForecastDay-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecastDay-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
