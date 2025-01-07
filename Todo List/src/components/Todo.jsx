import React from 'react'

function Todo() {
const [tasks, setTasks] = React.useState([]);
const [newtasks, setNewtasks] = React.useState('');

const addTask = () => {
    if(newtasks.trim!== '') {
        setTasks([...tasks, newtasks])
        setNewtasks('')
    }
}

const deletedTask = (index) => {
    const updatedTask = tasks.filter((_,taskIndex) => taskIndex !== index)
    setTasks(updatedTask)

}

  return (
    <div className='cetner'>
    <h1>Todo List</h1>
    <input type="text" value={newtasks} placeholder='Add Tasks' onChange={(e) => setNewtasks(e.target.value)} />
    <button onClick={addTask}>Add Task</button>

    <ul className='text-blue-600 '>
        {tasks.map((tasks,index) => (
            <li key={index}>
            {tasks}
            <button onClick={() => deletedTask(index)}>Delete</button></li>
        ))}
    </ul>
    </div>
  )
}

export default Todo