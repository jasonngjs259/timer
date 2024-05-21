import React, { createContext, useState } from "react";

const TimerContext = createContext();

const TimerContextProvider = ({ ...props }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  return (
    <TimerContext.Provider value={{ minutes, setMinutes, seconds, setSeconds }}>
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
