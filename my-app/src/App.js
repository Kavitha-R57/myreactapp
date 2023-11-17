 
import React, { useState } from 'react'

const App  = () => {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask  = () => {
    if(taskInput.trim()!=='')
    setTask([...task, setTaskInput]);
    setTaskInput();
    }
    const

  return (
    <div>
      <input type="text" value={taskInput} placeholder ="Enter your text" 
      onChange={e =>setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  )
}

export default App
