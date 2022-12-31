
import './App.css';
import { useState } from 'react';

import React from 'react';
function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
   <h1>Conter</h1>
   <p>{count}</p>
   <button onClick={()=> setCount(prev => prev+=1)}>+</button>
   <button onClick={()=> count > 0 && setCount(prev => prev-=1)}>-</button>
    </div>
  );
}

export default App;
