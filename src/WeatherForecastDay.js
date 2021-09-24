import React from "react";
import Degrees from ".degrees";

export default function WeatherForecastDay(props) {
  function Day() {
    let date = new Dater(props.data.dt * 1000);
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

  return (
    <div className="weatherForecastDay">
      <div className="weatherForecastDay-day">{Day()}</div>
      <div className="weatherForecastDay-icon">
        <Degrees code={weatherInquiry.IconUrl} size={32} />
      </div>
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
