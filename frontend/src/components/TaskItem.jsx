import React from 'react';

function TaskItem({ task, deleteTask, editTask }) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm text-gray-600">Status: {task.status}</p>
        {task.dueDate && (
          <p className="text-sm text-gray-600">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <button onClick={() => editTask(task)} className="bg-green-500 text-white px-3 py-1 rounded">
          Edit
        </button>
        <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
