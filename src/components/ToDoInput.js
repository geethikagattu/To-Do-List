import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPenToSquare } from '@fortawesome/free-regular-svg-icons'

export const ToDo = ({task , toggleComplete , deleteTodo , EditTodo}) => {
  return (
    <div className='ToDoInput'>
       <p onClick={() => toggleComplete(task.id)}
       className={`${task.completed ? 'completed': "" }`}>{task.task}</p>
       <div>
        <FontAwesomeIcon icon = {faPenToSquare} onClick={()=> EditTodo(task.id)}/>
        <FontAwesomeIcon icon = {faCheckSquare} onClick={()=> deleteTodo(task.id)}/>
       </div>
    </div>
  )
}
