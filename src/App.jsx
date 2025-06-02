import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('helo')

  const handleChange = (e) =>{
       setTodo(e.target.value)
  }

  const handleAddTodo = () =>{
      console.log(todo)
  }

  return (
    <div>
     <h1>Todo</h1>
     <div>
      <input type="text" placeholder='Enter Todo Here' value={todo} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
       { todo.map((todo) =>(
           <li>{todo}</li>
        ) )}
      </ul>
     </div>
    </div>
  )
}

export default App