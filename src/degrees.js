import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Degrees() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `1e8591024e68199d14970d6c0`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);
  }

  function displayCity(response) {
    setCity(response.data.name.value);
  }

  return (
    <div className="App">
      <div className="row my-3 d-flex justify-content-space-evenly">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onClick={displayCity}
            />
            <input type="submit" value="Find" />
          </form>
        </div>
      </div>

      <h1>{city}</h1>
    </div>
  );
}
