import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./degrees.css";

export default function Degrees() {
  let [city, setCity] = useState("");
  let [celsius, setCelsius] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `1e8591024e68199d14970d6c0`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);
  }

  function displayCity(response) {
    setCity(response.data.name.value);
  }

  function checkCelsius(response) {
    setCelsius(response.data.temp);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div className="row my-3">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onClick={displayCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Find" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1 className="text-center">Baguio City</h1>
      <ul className="text-center">
        <li>September 14, 2021 Tuesday 09:00 PM</li>
        <li>Scattered Thunderstorms</li>
      </ul>

      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
            alt="scattered thunderstorms"
          />
          <p>18 °C</p>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
