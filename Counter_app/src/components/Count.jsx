import React from 'react'
import { useState } from 'react';
import './Count.css'

const Count = () => {

    const[count,setcount] = useState(110);

    const increase = ()=> setcount(count+1);
    const decrease = ()=> setcount(count-1);
    const reset = ()=> setcount(0);

  return (
    <div className='Counter-container'>

        <h1>Counter : {count}</h1>

        <div className='btn-group'>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
    
        </div>
        

    </div>
  );
}

export default Count;
