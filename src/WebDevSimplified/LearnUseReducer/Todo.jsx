
function Todo({ todo, toggleComplete, onDelete }) {
    return (
      <div>
        <span style={{ color: todo.completed ? "#AAA" : "#000" }}>
          {todo.name}
        </span>
        <button onClick={() => toggleComplete(todo.id)}>Complete</button>
        <button onClick={() => onDelete(todo.id)}>Detele</button>
      </div>
    );
  }

export default Todo
