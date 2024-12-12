import { useCallback, useState, useEffect,useRef } from 'react'
import './App.css'

function App() {

  const[length, setLength] = useState(8);
  const[numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  //use ref hook 
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"
    if(numAllowed) str += "123456789"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numAllowed, charAllowed, setPassword])

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {passwordGenerator()},[length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto my-10 text-orange-500 bg-gray-700 px-3 py-3'>
      <h1 className='text-white justify-center my-5 text-2xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 relative'>
        <input type="text" value={password} className='w-full outline-none py-2 px-4 mx-5 my-5 rounded-lg' readOnly ref={passwordRef} />
        <button onClick={copytoclipboard} className='outline-none bg-blue-700 text-white py-2 px-4 absolute right-5 top-5 rounded-lg'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
          <label className='text-sm'>{length} : Length</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked = {numAllowed} id='numberInput' onChange={() => {setNumAllowed((prev) => !prev)}}/>
          <label className='text-sm' htmlFor='numberInput'>Number</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked = {charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label className='text-sm' htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
