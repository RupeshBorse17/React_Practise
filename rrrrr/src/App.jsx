



import { useEffect, useRef, useState } from 'react'
import './App.css'




function App() {
  // const countref = useRef(0);
  // const [rendercount,setrendercount] = useState(0);

  // const increase = ()=>{
  //   countref.current += 1;
  //   console.log("count in ref",countref.current);
  // };
  // return(
  //   <div>
  //     <p>Render Count:{rendercount}</p>
  //     <button onClick={increase}>Increase ref count</button>
  //     <br /> <br />
  //     <button onClick={()=>setrendercount(rendercount+1)}>Re-render</button>
  //   </div>
  // )

  // const inputref = useRef(null);
  // const Focusinput  = ()=>{
  //   inputref.current.focus();
  // };
  // return(
  //   <div>
  //     <input ref={inputref} type="text" placeholder='type here....' />
  //     <button onClick={Focusinput}>Focus Button</button>
  //   </div>
  // )

  const [count,setcount] = useState(0);
  const prevcountref = useRef();

  useEffect(()=>{
    prevcountref.current = count;

  },[count]);

  return(
    <div>
      <p>current : {count}</p>
      <p>Previous : {prevcountref.current}</p>
      <button onClick={()=>setcount(count+1)}>Increase</button>
    </div>
  )



  

  


  
}

export default App
