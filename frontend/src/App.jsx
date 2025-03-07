import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/tasks', taskData);
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedData);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
      setEditingTask(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
      <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
