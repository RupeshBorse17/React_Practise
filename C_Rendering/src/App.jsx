
import './App.css'
import { useState } from 'react';
function App() {

  const [isloggedin,setloggedin] = useState(true);

 
  return(

    <div>

      {isloggedin ? <h1>Welcome to Bharat</h1> : <h1>Guest Mode new Comer</h1>}
      <button onClick={()=>setloggedin(!isloggedin)}>
          {isloggedin ? "logout" : "login"}
      </button>
      
      

    </div>
  )

  
}

export default App