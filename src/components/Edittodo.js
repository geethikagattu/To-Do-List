import React, { useState } from "react";
/**
 * Edittodo - Component for editing an existing todo item
 *
 * Props:
 * - Edittodo: Function to update the task with new value and ID
 * - task: The current todo object being edited
 */
export const Edittodo = ({ Edittodo, task }) => {
  // Local state to hold the new value of the task being edited
  const [value, Setvalue] = useState(task.task);

  /**
   * Handles form submission
   * - Prevents default form behavior
   * - Calls the parent component's Edittodo with the new value and task ID
   * - Clears the input field
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    Edittodo(value, task.id);
    Setvalue("");
  };
  return (
    <div className="the-boss">
      <form className="TodoForm" onSubmit={handleSubmit}>
        {/* Input field to update task text */}

        <input
          type="text"
          className="input"
          value={value}
          placeholder="Update Task"
          onChange={(e) => {
            Setvalue(e.target.value);
          }}
        ></input>
        {/* Submit button to apply the changes */}
        <button type="submit" className="button">
          Update Task
        </button>
      </form>
    </div>
  );
};
