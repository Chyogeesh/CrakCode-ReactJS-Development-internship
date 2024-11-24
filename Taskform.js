import React, { useState } from "react";
import { createTask, updateTask } from "../services/api";

const TaskForm = ({ taskToEdit, onTaskSaved }) => {
  const [task, setTask] = useState(taskToEdit || { title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.id) {
      await updateTask(task.id, task);
    } else {
      await createTask(task);
    }
    onTaskSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">{task.id ? "Update Task" : "Create Task"}</button>
    </form>
  );
};

export default TaskForm;
