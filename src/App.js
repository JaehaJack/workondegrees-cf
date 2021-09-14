import "./App.css";
import Degrees from "./degrees";

function App() {
  return (
    <div className="wrapper">
      <div className="container my-3 p-2">
        <Degrees />
      </div>
      <p className="text-center">
        This is coded by <a href="/">Jazmi C.</a> and is{" "}
        <a href="/" target="_blank">
          open-sourced in Github
        </a>
      </p>
    </div>
  );
}

export default App;
