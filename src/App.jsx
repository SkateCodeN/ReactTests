import { useState } from 'react'

import './App.css'

import Counter from './component/Counter'
import ToDoList from './component/To-DoList'

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
    </>
  )
}

export default App
