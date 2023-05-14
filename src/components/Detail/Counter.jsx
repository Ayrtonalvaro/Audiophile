import React, { useState } from 'react';
import ButtonAddCart from './ButtonAddCart';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = ({ op }) => {
    if (op === '+' && counter >= 0) {
      setCounter((counter) => counter + 1);
    } else if (op === '-' && counter <= 0) {
      setCounter((counter) => counter - 1);
    }
  };

  const plus = () => {
    if(counter >= 0)
    setCounter(counter => counter + 1)
  }

  const rest = () => {
    if( counter > 0)
    setCounter(counter => counter - 1)
  }
  return (
    <div className="bg-slate-200 p-3">
      <div className="flex w-20 justify-around">
        <button
          onClick={rest}
          className="text-slate-400 text-xl hover:text-orange-400 "
        >
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={plus}
          className="text-slate-400 text-xl hover:text-orange-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
