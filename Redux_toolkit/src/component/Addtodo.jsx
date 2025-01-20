import React, { useState } from 'react'
import {addTodo} from '../features/todo/todoSlice'
import {useDispatch} from "react-redux"

function Addtodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <form onSubmit={addTodoHandler} action="">
        <input type="text" placeholder='add todo ......' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit'>Submit</button>

    </form>
  )
}

export default Addtodo