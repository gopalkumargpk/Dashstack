import React, { useState } from 'react';

import '../../App.css';
import '../styles/ToDo.css';

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Meeting with CEO', completed: false, starred: false },
    { id: 2, text: 'Pick up kids from school', completed: false, starred: true },
    { id: 3, text: 'Shopping with Brother', completed: false, starred: false },
    { id: 4, text: 'Review with HR', completed: true, starred: false },
    { id: 5, text: 'Going to Dia’s School', completed: false, starred: false },
    { id: 6, text: 'Check design files', completed: false, starred: true },
    { id: 7, text: 'Update File', completed: false, starred: false },
  ]);

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleToggleStar = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, starred: !task.starred } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, starred: false }]);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <button className="add-task-button" onClick={() => handleAddTask('New Task')}>Add New Task</button>
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className="task-checkbox"
            />
            <span
              className={`task-text ${task.completed ? 'completed' : ''}`}
            >
              {task.text}
            </span>
            <button
              className={`star-button ${task.starred ? 'starred' : ''}`}
              onClick={() => handleToggleStar(task.id)}
            >
              {task.starred ? '★' : '☆'}
            </button>
            {task.completed && <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>🗑️</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
