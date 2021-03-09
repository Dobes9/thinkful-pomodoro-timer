import React from "react";
import classNames from "../utils/class-names";

function PlayPauseStopButtons({
  playPause,
  isTimerRunning,
  setActiveSession,
  setIsTimerRunning,
  activeSession,
  initialTimerSettings,
  setTimerSettings,
}) {
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={() => {
              setActiveSession(true);
              playPause;
            }}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            disabled={!activeSession}
            onClick={() => {
              setActiveSession(false);
              setIsTimerRunning(false);
              setTimerSettings({ ...initialTimerSettings });
            }}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayPauseStopButtons;
