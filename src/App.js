import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter]= useState(15)

  const addValue = (value) => {
    // console.log("clicked", counter);
    //  counter = counter + 1
    if (counter < 20){
    setCounter(counter + 1)
  }else{
    return
  }
  }
  const removeValue = () => {
  // counter = counter - 1
    // console.log(counter);
    if(counter > 1){
    setCounter(counter - 1)
  }
  }

  return(
    <div>
      <h1>Use-State</h1>
      <h1>Counter_Value:{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      </div>

    )
  }
  export default App;
  