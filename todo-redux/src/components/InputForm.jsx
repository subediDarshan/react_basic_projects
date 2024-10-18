import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'

function InputForm() {

  const [todoTitle, setTodoTitle] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(todoTitle == "") return;
    dispatch(addTodo({title: todoTitle}))
    setTodoTitle("")
  }

  return (
    <>
        <form onSubmit={handleSubmit} className='flex'>
            <input type="text" className='rounded-l-lg w-full bg-white/20 text-white
             py-1.5 px-2 outline-none' placeholder="Write Todo..." value={todoTitle} onChange={(e) => (setTodoTitle(e.target.value))} />
            <button type='submit' className='bg-green-600 py-1 px-2 rounded-r-lg'>
                Add
            </button>
            
        </form>

    
    </>
  )
}

export default InputForm