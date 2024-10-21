import React from 'react';

const Button = () => {
  let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  const handleClick2 = (name) => console.log(`${name} stop click`);

  const handleClick3 = (e) => (e.target.textContent = 'OUCH!');

  // return <button onClick={() => handleClick('Bro')}>Click me</button>;
  return <button onDoubleClick={(e) => handleClick3(e)}>Click me</button>;
};

export default Button;
