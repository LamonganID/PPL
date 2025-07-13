import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20, backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>To-Do List</h2>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          style={{ flexGrow: 1, padding: 10, fontSize: 16 }}
        />
        <button onClick={addTask} style={{ padding: '10px 20px', marginLeft: 10, fontSize: 16, cursor: 'pointer' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: 10 }}
            />
            <span style={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10, cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
