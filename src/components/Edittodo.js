import React, {useState} from 'react'

export const Edittodo = ({Edittodo , task}) => {
  const [value , Setvalue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();

    Edittodo(value, task.id)
    Setvalue("")
  }
  return (
    <div className='the-boss'>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className= "input" value={value}
        placeholder='Update Task' onChange={(e)=> {
          Setvalue(e.target.value)
        }}></input>
        <button type="submit"className='button'>Update Task</button>
      </form>
    </div>
  )
}



