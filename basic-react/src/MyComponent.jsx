import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // 함수형 상태 업데이트
    // 이전의 상태에 기반에 업데이트를 하고 싶을 시 함수형 상태 업데이트 사용
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
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

export default MyComponent;
