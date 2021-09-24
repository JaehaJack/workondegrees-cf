import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [acquired, setAcquired] = useState(false);

  useEffect(() => {
    setAcquired(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setAcquired(true);
  }

  function load() {
    const apiKey = "b8c2057466322e9fe89d5b8ae08300f7";
    let latitude = 40.5;
    let longitude = 74;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metrics`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (acquired) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}
