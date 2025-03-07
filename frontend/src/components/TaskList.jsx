import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="grid gap-4">
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} deleteTask={deleteTask} editTask={editTask} />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskList;
