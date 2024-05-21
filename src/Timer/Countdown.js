import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../Context/Timer";

const Countdown = (props) => {
  const { minutes, seconds } = useContext(TimerContext);

  const [localMinutes, setLocalMinutes] = useState(minutes);
  const [localSeconds, setLocalSeconds] = useState(seconds);
  const [showTimeUp, setShowTimeUp] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);

  useEffect(() => {
    if (localSeconds < 0) {
      setLocalSeconds(59);
      setLocalMinutes((prev) => prev - 1);
    }
  }, [localSeconds]);

  useEffect(() => {
    const timerTimeout = setTimeout(() => {
      setLocalSeconds(localSeconds - 1);
    }, 1000);

    if (pauseTimer) {
      clearTimeout(timerTimeout);
    }

    if (localMinutes <= 0 && localSeconds <= 0) {
      setShowTimeUp(true);
      clearTimeout(timerTimeout);
    }

    return () => clearTimeout(timerTimeout);
  }, [localSeconds, localMinutes, pauseTimer]);

  const setTimerPattern = (number) => {
    if (number === "") {
      return "00";
    } else if (number < 10) {
      return "0" + number;
    }

    return number;
  };

  return (
    <div className="countdownContainer">
      <div className="timerTextContainer">
        {setTimerPattern(localMinutes) + ":" + setTimerPattern(localSeconds)}
      </div>
      {showTimeUp && (
        <div className="timeupTextContainer redText">Times up</div>
      )}
      {pauseTimer && !showTimeUp && (
        <div className="buttonContainer">
          <button onClick={() => setPauseTimer(false)}>Resume</button>
        </div>
      )}
      {!pauseTimer && !showTimeUp && (
        <div className="buttonContainer">
          <button onClick={() => setPauseTimer(true)}>Pause</button>
        </div>
      )}
      {(showTimeUp || pauseTimer) && (
        <div className="buttonContainer">
          <button
            className="dismissButton"
            onClick={() => props.setShowCountdown(false)}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

export default Countdown;
