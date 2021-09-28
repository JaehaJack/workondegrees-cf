import React from "react";
import FormattedDate from "./formattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

import "./degrees.css";

export default function WeatherCover(props) {
  return (
    <div className="weatherCover">
      <h1 className="text-center">{props.info.city}</h1>
      <ul className="text-center">
        <li>
          <FormattedDate dates={props.info.date} />
        </li>
        <li>{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6 d-flex justify-content-center clearfix">
          <div>
            <WeatherIcon
              pic={props.info.iconUrl}
              alt={props.info.description}
              size={72}
            />
          </div>
          <p className="numericTemp float-right font-size-48">
            {Math.round(props.info.temperature)} °C
          </p>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
      <hr />
      <WeatherForecast coordinates={props.info.coordinates} />
    </div>
  );
}
