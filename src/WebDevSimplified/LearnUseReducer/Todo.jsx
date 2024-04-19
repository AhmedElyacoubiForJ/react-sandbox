/* function Todo({ todo, toggleComplete, onDelete }) {
  return (
    <div>
      <span style={{ color: todo.completed ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => onDelete(todo.id)}>Detele</button>
    </div>
  );
} */
import { ACTIONS } from "./ComplexUseReducer";
function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.completed ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Detele
      </button>
    </div>
  );
}

export default Todo;
