import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState(() => localStorage.getItem("bgcolor"))

  const changeColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem("bgcolor",newColor)
  }

  return (
     <div className="w-full h-screen duration-100" 
     style={{backgroundColor: color}}>
      <div className="w-full fixed flex flexwrap justify-center bottom-12">
          <button onClick={() => changeColor("green")} className="outline bg-green-600 text-white px-10 py-2" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => changeColor("yellow")} className="outline bg-yellow-600 text-white px-10 py-2" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => changeColor("red")} className="outline bg-red-600 text-white px-10 py-2" style={{backgroundColor: "red"}}>red</button>
          <button onClick={() => changeColor("purple")} className="outline bg-purple-600 text-white px-10 py-2" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => changeColor("blue")} className="outline bg-blue-600 text-white px-10 py-2" style={{backgroundColor: "blue"}}>Blue</button>
     </div>
     </div>

  )
}

export default App
