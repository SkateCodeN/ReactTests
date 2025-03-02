import { useState } from 'react'

import './App.css'

import Counter from './component/Counter'
import ToDoList from './component/To-DoList'
import TodoList from './component/TodoList'

function App() {

  return (
    <>

      <div className='test-Container'>
        My counter Component
        <Counter  initialCount={0}/>
      </div>

      <div className='test-Container'>
        My Task Component
        <ToDoList />
      </div>

      <div className='test-container'>
        Task Component 2.0
        <TodoList />
      </div>
    </>
  )
}

export default App
