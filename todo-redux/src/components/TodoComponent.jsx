import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editTodo, toggleComplete, deleteTodo } from '../features/todoSlice'

function TodoComponent({todo}) {

  const[isTodoEditable, setIsTodoEditable] = useState(false)
  const[editOrSave, setEditOrSave] = useState('Edit')
  const[todoTitle, setTodoTitle] = useState(todo.title)

  const dispatch = useDispatch()

  const handleEditOrSave = () => {
    if(editOrSave == 'Edit') {
        setEditOrSave('Save')
        setIsTodoEditable(true)
    } else {
        setEditOrSave('Edit')
        setIsTodoEditable(false)
        dispatch(editTodo({id: todo.id, title: todoTitle}))
    }
  }

  return (
    <>
        <div className={`w-full ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}  text-black flex justify-between py-3 px-3
        rounded-lg`}>
            <div className='flex gap-3'>
                <input type="checkbox" onChange={() => (dispatch(toggleComplete({id: todo.id})))} />
                <input type="text" className={`bg-transparent rounded-lg  ${todo.completed ? "line-through" : ""}`} value={todoTitle} readOnly={!isTodoEditable} onChange={(e) => (setTodoTitle(e.target.value))} />
            </div>
            <div className='flex gap-3'>
                <button className='bg-white py-1 px-2 rounded-lg' onClick={handleEditOrSave}>{editOrSave}</button>
                <button className='bg-white py-1 px-2 rounded-lg' onClick={() => (dispatch(deleteTodo({id: todo.id})))}>Remove</button>
            </div>
        </div>
    
    </>
  )
}

export default TodoComponent