import React, { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const increment = () => {
    if (count === 10) {
      setError("Overflow! Count cannot exceed 10.");
      return;
    }

    setCount(count + 1);
    setError("");
  };

  const decrement = () => {
    if (count === 0) {
      setError("Count cannot be negative!");
      return;
    }

    setCount(count - 1);
    setError("");
  };

  return (
    <div>
      <h1>Counter App</h1>

      <button onClick={increment}>
        ADD +
      </button>

      <span>{count}</span>

      <button onClick={decrement}>
        SUB -
      </button>

      {error && <p>{error}</p>}
    </div>
  )
}

export default CounterApp