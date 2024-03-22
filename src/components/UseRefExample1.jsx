import { useRef } from "react";

// useRef vs. useState
// instead of useState
// because we need to keep track of the value of the input field
// and we don't want to re-render the component every time the value changes.
function UseRefExample1() {
  const inputRef = useRef();
  const paragraphRef = useRef();

  //
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello, World!";
   
    inputRef.current.style.backgroundColor = "red";
    paragraphRef.current.innerText = "Goodbye!";
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary my-4">
          Submit
        </button>
        <p className="my-4" onClick={() => inputRef.current.focus()} ref={paragraphRef}></p>
      </form>
    </div>
  );
}

export default UseRefExample1;
