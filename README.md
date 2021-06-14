# Thinkful Pomodoro Timer
#### A midterm project for Thinkful Engineering Immersion.

A rudimentary version of a pomodoro timer utilizing React and Bootstrap.  Demonstrates React rendering and state management across various modules.

## Links
* [Live Demo](https://project-pomodoro-timer-qualified-1-pi.vercel.app/)

## Rubric
For your project to pass, all of the following statements must be true.

* All tests are passing in Qualified.
* All props are treated as read-only.
* Audio plays when the focus timer expires.
* Audio plays when the break timer expires.
* All state is updated using callbacks to avoid race conditions. Allowable exceptions are cases where the next state is not determined by the current state. For example, when disabling the timer, it is okay to just call setIsTimerRunning(false).
* There are at least three components.
* Each component has a single responsibility.
* The main Pomodoro is free of any conditional display logic. This means that there aren't any if statements in the render function; each component determines its own visibility.

# Technology
#### Built with:
  * React, making use of useState across multiple modules.
  * Bootstrap
