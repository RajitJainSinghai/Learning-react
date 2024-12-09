import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className="bg-green-400">
      Hello world!
    </h1>

    <Cards title="rajit" linktext="call me"/> <br />
    <Cards title="Singhai" />
    
        </>
  )
}

export default App
