import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="Counter-Container">

        <p id='para'> You have clicked{count} </p>  
        <button id='btn' onClick={()=>{setCount(count+1)}}>Click me</button>
      </div>
    </div>
  );
};

export default Counter;
