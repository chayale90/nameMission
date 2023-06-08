import { useState } from 'react';

const Counter= () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button className='btn btn-danger' onClick={decrement}>-</button>
      <span>{count}</span>
      <button className='btn btn-info' onClick={increment}>+</button>
    </div>
  );
};

export default Counter;