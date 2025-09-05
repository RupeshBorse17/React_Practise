
import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button';

function App() {

  const [count,setcount] = useState(0);

  function handleclick(){
    setcount(count+1);
  }
  
return (
  <div>

    <button handleclick={handleclick}
    text="Click me">
      

    </button>

    {/* <Card name="Maharana">

      <h1>Shree Ram</h1>
      <p>Jay shree ram</p>
      <p>Har Har Mahadev</p>
    </Card> */}

    
  </div>
);


}

export default App
