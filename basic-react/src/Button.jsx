import React from 'react';

const Button = () => {
  const styles = {
    backgroundColor: 'hsl(200, 100%, 50%)',
    width: '600px',
    height: '200px',
    color: 'white',
    fontSize: '100px',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={styles}>Click Me</button>;
};

export default Button;
