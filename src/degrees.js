import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./degrees.css";

export default function Degrees(props) {
  let [weatherInquiry, setWeatherInquiry] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherInquiry({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      precipitation: response.data.main.precipitation,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherInquiry.ready) {
    return (
      <div className="App">
        <form className="d-flex justify-content-center">
          <div className="row my-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Find" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1 className="text-center">{weatherInquiry.city}</h1>
        <ul className="text-center">
          <li>September 14, 2021 Tuesday 09:00 PM</li>
          <li>{weatherInquiry.description}</li>
        </ul>

        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <img
              src={weatherInquiry.icon}
              alt={weatherInquiry.description}
              className="float-left"
            />
            <p className="float-right">{weatherInquiry.temperature} °C</p>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherInquiry.precipitation}%</li>
              <li>Humidity: {weatherInquiry.humidity}%</li>
              <li>Wind: {weatherInquiry.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `3df9e131e8591024e68199d14970d6c0`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <h1 className="text-center my-3">
        "Please know that we are stacking the bookshelf with data required."
      </h1>
    );
  }
}
