import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //hook = propagate change to UI

  const increment = () => {
    if(counter < 20) {
      setCounter(counter+1) //async 
      setCounter(counter+1) //async 
      setCounter(counter+1) //async 
      // console.log(counter)
    }
    
  }


  const decrement = () => {
    if(counter > 0) {
      setCounter(counter-1) //async
      console.log(counter)
    }
    
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Add</button>
      <br /><br />
      <button onClick={decrement}>Subtract</button>
      <p>{counter}, {counter}</p>
    </>
  )
}

export default App
