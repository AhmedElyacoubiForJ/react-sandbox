import useLocalStorage from "../hooks/useLocalStorage";
// TODO: is to how to deal with localStorage for arrays
function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", '');

  return (
    <form className="w-25">
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Task
        </label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
    </form>
  );
}

export default CustomHookExample2;
