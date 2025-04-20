import React, {useState} from 'react'
import { Todoform } from './ToDoOutput'
import { ToDo } from './ToDoInput';
import { Edittodo } from './Edittodo';
import {v4 as uuidv4 } from 'uuid';
uuidv4();

export const ToDoBox = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos , {id: uuidv4() , task: todo,
        completed: false, isEditing: false}])
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            todo , completed: !todo.completed} : todo
        ))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const EditTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,task:task , isEditing : !todo.isEditing} : todo))
    }
  return (
    <div className='ToDoBox'>
        <h1>Things To Do</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo,index)=> (
        todo.isEditing ? (
            <Edittodo Edittodo = {editTask} task= {todo} />
        ) : (
            <ToDo task = {todo} key = {index} 
            toggleComplete={toggleComplete} deleteTodo = {deleteTodo}
            EditTodo={EditTodo}/>
        )
       
      ))}
    </div>
  )
}
