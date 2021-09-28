import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function Day() {
    let now = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = now.getDay();

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return temperature < 10 ? `0${temperature}°` : `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return temperature < 10 ? `0${temperature}°` : `${temperature}°`;
  }

  return (
    <div className="row text-center d-flex justify-content-space-between">
      <div className="col">
        <div className="weatherForecastDay">{Day()}</div>
        <div className="weatherForecastIcon">
          <WeatherIcon pic={props.data.weather[0].icon} size={32} />
        </div>
        <div className="weatherForecastDescription">
          {props.data.weather[0].description}
        </div>
        <div className="weatherForecastIemperature">
          <span className="weatherForecastTempMax">{maxTemperature()}</span> |{" "}
          <span className="weatherForecastDayTempMin">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
