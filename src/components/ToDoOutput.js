import React,{useState} from 'react'

export const Todoform = ({addTodo}) => {
  const [value , Setvalue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);
    Setvalue("")
  }
  return (
    <div className='ToDoOutput'>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className= "input" value={value}
        placeholder='What do you want to do today?' onChange={(e)=> {
          Setvalue(e.target.value)
        }}></input>
        <button type="submit"className='button'>Add Task</button>
      </form>
    </div>
  )
}
