import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
/**
 * ToDo - Component to display a single todo item
 * 
 * Props:
 * - task: The todo object containing id, task, completed, and isEditing
 * - toggleComplete: Function to mark the task as complete/incomplete
 * - deleteTodo: Function to delete the task
 * - EditTodo: Function to toggle the editing state of the task
 */
export const ToDo = ({task , toggleComplete , deleteTodo , EditTodo}) => {
  return (
    <div className='ToDoInput'>
     
     {/* Task text - clicking toggles completion status */}
       <p onClick={() => toggleComplete(task.id)}
       className={`${task.completed ? 'completed': "" }`}>{task.task}</p>
       <div>
         {/* Icons for editing and deleting the todo */}
        <FontAwesomeIcon icon = {faPenToSquare} onClick={()=> EditTodo(task.id)}/>
         {/* Delete icon - removes the task */}
        <FontAwesomeIcon icon = {faCheckSquare} onClick={()=> deleteTodo(task.id)}/>
       </div>
    </div>
  )
}
