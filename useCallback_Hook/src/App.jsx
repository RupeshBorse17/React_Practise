
import { useState } from 'react'
import './App.css'
import Child from './Components/Child';
import { useCallback } from 'react';

function App() {
  
  const [count,setcount] = useState(0);

  // function handleclick(){
  //   setcount(count+1);
  // }

  const handleclick = useCallback(()=>{
    setcount(count+1);
  },[]);

  return(

   <div>

    <div>
      Count : {count}
    </div>
    <br />
    <div>
      <button onClick={handleclick}>Increament</button>
    </div>
    <br />
    <div>
      <Child
       buttonname="Click2 me" 
       handleclick={handleclick}
      
      />
    </div>



   

   </div>

    
  )
  
}

export default App
