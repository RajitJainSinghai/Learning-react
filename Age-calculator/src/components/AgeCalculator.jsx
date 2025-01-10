import React, { useState } from 'react'

function AgeCalculator() {
    const [age, setAge] = useState("");
    const[birthDate, setBirthDate] = useState(0);

  const CalculateAge = () => {
    const today = new Date();
    const birthDatedate = new Date(birthDate);
    let age = today.getFullYear() - birthDatedate.getFullYear();
    const monthDifference = today.getMonth() - birthDatedate.getMonth();
    const dayDifference = today.getDate() - birthDatedate.getDate();
    console.log(age, monthDifference, dayDifference);
    

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    setAge(age);

  }

  const Reset = () => {
    setAge("");
    setBirthDate("");
  }

  return (
    <div>
    <h1>Hello rajit age AgeCalculator</h1>
<div className='Age_calculator'>
  <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)}/>
  <div className='buttons_action'>
    <button className='btn_age' onClick={CalculateAge}>Calculate Age</button>
    <button className='btn_age' onClick={Reset}>Reset</button>
  </div>
</div>

<h1>Your Age is {age > 0 ? `${age}` : ''}</h1>
</div>
  )
}

export default AgeCalculator