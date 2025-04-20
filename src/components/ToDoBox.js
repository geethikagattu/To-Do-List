import React, { useState } from "react";
import { Todoform } from "./ToDoOutput"; // Component for adding new todos
import { ToDo } from "./ToDoInput"; // Component for displaying a single todo item
import { Edittodo } from "./Edittodo"; // Component for editing a todo item
import { v4 as uuidv4 } from "uuid"; // UUID for unique todo IDs
uuidv4(); //generates unique ids to identify each task. +
/**
 * ToDoBox - Main container component for the todo application
 *
 * This component manages the todo list state and renders the form
 * for adding new todos and the list of existing todos.
 *
 * It handles all todo operations: adding, editing, completing, and deleting.
 */
export const ToDoBox = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Adds a new todo to the list
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  // Toggles the completed status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  //Deletes a todo from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Toggles the editing mode of a todo
  const EditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  //Updates a todo with new task content
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };
  return (
    <div className="ToDoBox">
      <h1>Things To Do</h1>
      {/* Form for adding a new todo */}
      <Todoform addTodo={addTodo} />

      {/* Display all todos, editing or not */}
      {todos.map((todo, index) =>
        todo.isEditing ? (
             // If in editing mode, show edit form
          <Edittodo Edittodo={editTask} task={todo} />
        ) : (
            // Otherwise, show the regular todo item
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            EditTodo={EditTodo}
          />
        )
      )}
    </div>
  );
};
