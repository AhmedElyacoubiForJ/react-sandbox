import { useState, useEffect } from "react";

import Task from "./Task";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const createTask = () => {
    const newTaskObject = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    };

    setTodoList([...todoList, newTaskObject]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleComplete = (taskId) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === taskId) {
          return {
           ...task,
           completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To Do List</h1>
      <div className="row justify-content-center p-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a task..."
                  onChange={handleChange}
                  value={newTask}
                />
                <button className="btn btn-primary" onClick={createTask}>
                  Add Task
                </button>
              </div>
              <ul className="list-group">
                {todoList.map((task, index) => (
                  <li
                    key={task.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <Task
                      task={task}
                      deleteTask={() => deleteTask(task.id)}
                      toggleComplete={() => toggleComplete(task.id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
