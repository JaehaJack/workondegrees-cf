import "./App.css";
import Degrees from "./degrees";

function App() {
  return (
    <div className="wrapper">
      <div className="container my-3 p-2">
        <Degrees defaultCity="Berlin" />
      </div>
      <p className="text-center">
        This is coded by{" "}
        <a
          href="https://romantic-ritchie-f33c95.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Jazmi C.
        </a>{" "}
        It is{" "}
        <a
          href="https://github.com/JaehaJack/workondegrees-cf"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced in Github
        </a>{" "}
        and is{" "}
        <a
          href="https://zealous-ramanujan-655ce9.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on netlify.
        </a>
      </p>
    </div>
  );
}

export default App;
