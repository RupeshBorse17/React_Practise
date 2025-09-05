import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("Component rendered!");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
