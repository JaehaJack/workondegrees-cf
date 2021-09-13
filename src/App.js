import "./App.css";
import Degrees from "./degrees";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>Weather App</h1>
        </header>
        <Degrees />
      </div>
      <p className="text-center">
        This is coded by <a href="/">Jazmi C.</a>and is{" "}
        <a href="/">open-sourced in Github</a>
      </p>
    </div>
  );
}

export default App;
