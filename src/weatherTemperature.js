import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>{Math.round(props.celsius)} °C |</span>{" "}
        <span>
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span>
          {Math.round(`${fahrenheit}`)}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
        </span>
        <span>| °F</span>
      </div>
    );
  }
}
