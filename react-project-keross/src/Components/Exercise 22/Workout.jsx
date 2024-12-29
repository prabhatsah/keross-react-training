import React from 'react'
export default function Workout({ title, description, time, onComplete }) {
    const [timerStarted, setTimerStarted] = React.useState(false);
    const [timerStopped, setTimerStopped] = React.useState(false);
    const timer = React.useRef();
    
  function handleStartWorkout() {
    // Todo: Start timer
    timer.current = setTimeout(() => {
        handleStopWorkout()
    }, time);
    
    setTimerStarted(true);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    clearTimeout(timer.current);
    setTimerStopped(true);
    onComplete()
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        {!timerStarted && <button onClick={handleStartWorkout}>Start</button>}
        {timerStarted && <button onClick={handleStopWorkout}>Stop</button>}
      </p>
    </article>
  );
}
