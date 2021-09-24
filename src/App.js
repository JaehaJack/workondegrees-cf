import "./App.css";
import Degrees from "./degrees";

function App() {
  return (
    <div className="wrapper">
      <div className="container my-3 p-2">
        <Degrees defaultCity="Berlin" />
      </div>
      <p className="text-center">
        This is coded by <a href="/">Jazmi C.</a> and is{" "}
        <a
          href="https://github.com/JaehaJack/workondegrees-cf"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced in Github
        </a>
      </p>
    </div>
  );
}

export default App;
