import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, editingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setDueDate(editingTask.dueDate ? editingTask.dueDate.split('T')[0] : '');
    } else {
      setTitle('');
      setDescription('');
      setStatus('pending');
      setDueDate('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      status,
      dueDate: dueDate ? new Date(dueDate) : null,
    };
    if (editingTask) {
      updateTask(editingTask._id, taskData);
    } else {
      addTask(taskData);
    }
    if (!editingTask) {
      setTitle('');
      setDescription('');
      setStatus('pending');
      setDueDate('');
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-bold mb-2 text-center">
          {editingTask ? 'Edit Task' : 'Add Task'}
        </h2>
        <div className="mb-2">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full border rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Status</label>
          <select
            className="w-full border rounded p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Due Date</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
