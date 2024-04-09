import React from "react";

const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <>
      <span style={{ color: task.completed ? "green" : ""}}>{task.name} : {task.completed ? "Done" : "In Progress"}</span>
      <div className="btn-group">
        <button className="btn btn-primary btn-sm edit-btn" onClick={toggleComplete}>
          {task.completed ? <>✅</> : <>⌛</>}
        </button>
        <button
          onClick={deleteTask}
          className="btn btn-danger btn-sm delete-btn"
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default Task;
