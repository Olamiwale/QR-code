import react, { useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, setHours] = useState(0);

  const start = () => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  if (seconds === 60) {
    setSeconds(0);
    setMinute(minute + 1);
  } else if (minute === 60) {
    setMinute(0);
    setHours(hours + 1);
  }

  const stop = () => {
    clearInterval(setSeconds(0));
  };

  return (
    <div className="App">
      <div className="time">
        <span> {("0" + hours).slice(-2)} </span>:
        <span> {("0" + minute).slice(-2)} </span>:
        <span> {("0" + seconds).slice(-2)} </span>
      </div>
      <div className="btn">
        <button className="btn-start" onClick={start}>
          Start
        </button>
        <button className="btn-stop" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
