import { useState, useEffect, useRef } from "react";
import './styles.css';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const instervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  // we perform some code if the component is mounted
  // and if the StopWatch is running
  useEffect(() => {}, [isRunning]);

  function start() {}

  function stop() {}

  function reset() {}

  function formatTime() {
    return "00:00:00";
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={start}>Start</button>
        <button className="stop-button" onClick={stop}>Stop</button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
