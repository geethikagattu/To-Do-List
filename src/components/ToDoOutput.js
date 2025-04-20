import React,{useState} from 'react'
/**
 * Todoform - Component to add a new todo
 * 
 * Props:
 * - addTodo: Function passed from parent to add a new task to the list
 */
export const Todoform = ({addTodo}) => {
  const [value , Setvalue] = useState("");
 /**
   * Handles form submission
   * - Prevents default form behavior
   * - Calls addTodo with current input value
   * - Resets the input field
   */
  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);
    Setvalue("")
  }
  return (
    <div className='ToDoOutput'>
      <form className='TodoForm' onSubmit={handleSubmit}>
         {/* Input field for typing the task */}
        <input type="text" className= "input" value={value}
        placeholder='What do you want to do today?' onChange={(e)=> {
          Setvalue(e.target.value)
        }}></input>
          {/* Button to add the task */}
        <button type="submit"className='button'>Add Task</button>
      </form>
    </div>
  )
}
