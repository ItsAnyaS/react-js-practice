
import './App.css';
import { useState, useEffect } from 'react';

import React from 'react';
function App() {


  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const [currentMonth, setCurrentMonth] = useState(12 - today.getMonth()-1)
  const [currentday, setCurrentDay] = useState(31 - today.getDate())
  const [currentHour, setCurrentHour] = useState(24 -today.getHours())
  const [currentMinute, setCurrentMinute] = useState(60 - today.getMinutes())
  const [currentSecond, setCurrentSecond] = useState(60 -today.getSeconds())
  useEffect(()=> {
    setCurrentSecond(60 - today.getSeconds())

}, [setInterval(()=> 
  setCurrentSecond(60 - today.getSeconds())
, 1000)])

  return (
    <div className="App">
   <h1>New Years count down!</h1>
    <h3>Months till {currentMonth}</h3>
    <h3>Days till {currentday} </h3>
    <h3>hours till {currentHour}</h3>
    <h3>minutes till {currentMinute}</h3>
    <h3>Seconds till {currentSecond}</h3>
    <button>new</button>
    </div>
  );
}

export default App;
