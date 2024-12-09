import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(0);

  const addValues = () => {
    counter = counter + 1;
    // setcounter((prevcounter) => prevcounter + 1 )
    // setcounter((prevcounter) => prevcounter + 1 )
    // setcounter((prevcounter) => prevcounter + 1 )
    // setcounter((prevcounter) => prevcounter + 1 )
    console.log("counter", {counter});
    setcounter(counter)
    
  }
  const decValues = () => {
    counter = counter - 1;
    console.log("counter", {counter});
    setcounter(counter)
  }

  return (
    <>
     <h1>Rajit counter</h1>
     <h3>counter : {counter}</h3>
     <button onClick={addValues}>Add value {counter}</button>
     <br />
     <br />
     <button onClick={decValues}>Decrease value</button>
     <footer>{counter}</footer>
    </>
  )
}

export default App
