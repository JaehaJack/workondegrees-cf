import React, { useState } from "react";
import WeatherCover from "./weathercover";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./degrees.css";

export default function Degrees(props) {
  let [weatherInquiry, setWeatherInquiry] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    locate();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function locate() {
    const apiKey = `3df9e131e8591024e68199d14970d6c0`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherInquiry({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherInquiry.ready) {
    return (
      <div className="App">
        <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
          <div className="row my-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Find" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherCover info={weatherInquiry} />
      </div>
    );
  } else {
    locate();
    return "Loading....";
  }
}
