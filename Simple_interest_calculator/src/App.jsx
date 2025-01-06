import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [interest, setInterest] = useState('')

  const calculateInterest = () => {
    if(principal && rate && time) {
      const result = (principal * rate * time)/100;
      setInterest(result)
    }
    else {
      alert("please fill all the details");
    }
  }

  return (
    <div className="app">
    <h1>Simple Interest Calculator</h1>

    <div className="input-group">
      <label htmlFor="principal">Principal Amount:</label>
      <input
        type="number"
        id="principal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
      />
    </div>

    <div className="input-group">
      <label htmlFor="principal">Rate:</label>
      <input
        type="number"
        id="rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter Rate %"
      />
    </div>

    <div className="input-group">
      <label htmlFor="principal">Time:</label>
      <input
        type="number"
        id="time"
        value={time}
        onChange={(e) =>setTime(e.target.value)}
        placeholder="Enter time"
      />
    </div>

    <button onClick={calculateInterest} className="calculate-btn">
        Calculate Interest
      </button>

      {interest !== null && (
        <div>
          <p>Calculated simple interest is : {interest}</p>
        </div>
      )}
    
    </div>
  )
}

export default App
