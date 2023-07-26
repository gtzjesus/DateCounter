import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date('july 26 2023');
  date.setDate(date.getDate() + count);

  return (
    <>
      {/* STEP */}
      <div className="counter">
        <button className="btn" onClick={() => setStep(step - 1)}>
          -
        </button>
        <h1 className="count">Step:{step}</h1>
        <button className="btn" onClick={() => setStep(step + 1)}>
          +
        </button>
      </div>

      {/* COUNT */}
      <div className="counter">
        <button className="btn" onClick={() => setCount(count - step)}>
          -
        </button>
        <h1 className="count">Count:{count}</h1>
        <button className="btn" onClick={() => setCount(count + step)}>
          +
        </button>
      </div>

      {/* OUTPUT */}
      <div className="date">
        <p className="actual-date">
          <span>
            {count === 0
              ? 'Today is'
              : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days ago was`}{' '}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
