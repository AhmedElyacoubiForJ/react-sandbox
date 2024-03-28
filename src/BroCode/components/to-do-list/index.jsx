import "./styles.css";
import { useState } from "react";

function ToDoListExample() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      //
     /*  const taskToMoveUp = tasks[index];
      const taskToMoveDown = tasks[index - 1];
      setTasks((t) => [
        ...t.slice(0, index - 1),
        taskToMoveUp,
        taskToMoveDown,
        ...t.slice(index + 1),
      ]); */
      // or
      /* const colors = ["red", "green", "blue", "black", "white"];
      // let's swap the first and last element
      [colors[0], colors[4]] = [colors[4], colors[0]]; */
      const updatedTasks = [...tasks];
      // SWAP
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => handleInputChange(e)}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>

        <ol>
          {tasks && tasks.length > 0
            ? tasks.map((task, index) => (
                <li key={index}>
                  <span className="text">{task}</span>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    👆
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}
                  >
                    👇
                  </button>
                </li>
              ))
            : null}
        </ol>
      </div>
    </div>
  );
}

export default ToDoListExample;
