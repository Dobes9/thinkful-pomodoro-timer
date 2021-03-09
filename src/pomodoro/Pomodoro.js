import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import TimerDurations from "./TimerDurations";
import PlayPauseStopButtons from "./PlayPauseStopButtons";
import SessionDisplay from "./SessionDisplay";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const initialTimerSettings = {
    focusDuration: 25,
    breakDuration: 5,
    onBreak: false,
  };

  const [timerSettings, setTimerSettings] = useState({
    ...initialTimerSettings,
  });

  const [activeSession, setActiveSession] = useState(false);
  

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <TimerDurations
        timerSettings={timerSettings}
        activeSession={activeSession}
        setTimerSettings={setTimerSettings}
      />
      <PlayPauseStopButtons
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        activeSession={activeSession}
        setActiveSession={setActiveSession}
        setIsTimerRunning={setIsTimerRunning}
        initialTimerSettings={initialTimerSettings}
        setTimerSettings={setTimerSettings}
      />
      <SessionDisplay
        activeSession={activeSession}
        isTimerRunning={isTimerRunning}
        timerSettings={timerSettings}
      />
    </div>
  );
}

export default Pomodoro;
