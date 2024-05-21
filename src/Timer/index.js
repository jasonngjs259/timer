import React, { useContext, useState } from "react";
import Countdown from "./Countdown";
import Form from "./Form";
import { TimerContext } from "../Context/Timer";
import "./../App.css";

const Timer = () => {
  const { minutes, setMinutes, seconds, setSeconds } = useContext(TimerContext);
  const [showCountdown, setShowCountdown] = useState(false);

  return (
    <div className="container">
      <div className="greyContainer" />
      {showCountdown ? (
        <Countdown setShowCountdown={setShowCountdown} />
      ) : (
        <Form
          minutes={minutes}
          setMinutes={setMinutes}
          seconds={seconds}
          setSeconds={setSeconds}
          setShowCountdown={setShowCountdown}
        />
      )}
    </div>
  );
};

export default Timer;
