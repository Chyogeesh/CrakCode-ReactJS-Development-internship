// src/App.js
import React, { useState } from "react";
import Auth from "./components/Auth";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [user, setUser] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAuthSuccess = () => setUser(true);
  const handleTaskSaved = () => setTaskToEdit(null);

  return (
    <div>
      {!user ? (
        <Auth onAuthSuccess={handleAuthSuccess} />
      ) : (
        <div>
          <TaskList onEdit={(task) => setTaskToEdit(task)} />
          <TaskForm taskToEdit={taskToEdit} onTaskSaved={handleTaskSaved} />
        </div>
      )}
    </div>
  );
};

export default App;
