import React from "react";
import { minutesToDuration } from "../utils/duration";

function TimerDurations({ timerSettings, activeSession, setTimerSettings }) {
  const { focusDuration, breakDuration } = timerSettings;
  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(timerSettings.focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              value={timerSettings.focusDuration}
              onClick={() => {
                setTimerSettings({
                  ...timerSettings,
                  focusDuration: Math.min(
                    Math.max(parseInt(focusDuration - 5), 5),
                    60
                  ),
                });
              }}
              disabled={activeSession}
            >
              -
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              value={timerSettings.focusDuration}
              onClick={() => {
                setTimerSettings({
                  ...timerSettings,
                  focusDuration: Math.min(
                    Math.max(parseInt(focusDuration + 5), 5),
                    60
                  ),
                });
              }}
              disabled={activeSession}
            >
              +
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(timerSettings.breakDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={() => {
                  setTimerSettings({
                    ...timerSettings,
                    breakDuration: Math.min(
                      Math.max(parseInt(breakDuration - 1), 1),
                      15
                    ),
                  });
                }}
                disabled={activeSession}
              >
                -
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => {
                  setTimerSettings({
                    ...timerSettings,
                    breakDuration: Math.min(
                      Math.max(parseInt(breakDuration + 1), 1),
                      15
                    ),
                  });
                }}
                disabled={activeSession}
              >
                +
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerDurations;
