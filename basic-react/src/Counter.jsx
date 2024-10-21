import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>Decrement Button</button>
      <button onClick={reset}>Reset Button</button>
      <button onClick={increment}>Increment Button</button>
    </div>
  );
};

export default Counter;
