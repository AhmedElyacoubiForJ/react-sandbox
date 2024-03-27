// Updater function = A function passed as an argument to setState() usually
//                    ex. setYear(y => y + 1) passing an arrow function
//                    Allow for safe based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import { useState } from "react";
function FunctionUpdaterExample() {
  const [count, setCount] = useState(0);

  function decrement() {
    // setCount(count - 1);
    // setCount(count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  }

  function rest() {
    setCount(0);
  }
  function increment() {
    // performance reason don't work
    // setCount(count + 1);
    // setCount(count + 1);

    // based on the previous state
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // or we can use
    // Takes the PENDING state to calculate the NEXT state
    // React put your updater functions in a queue (waiting in line)
    // During the next render, it will call them in the same order.
    // it's also a good practice to use updater functions
    // even if we don't have multiple state updates
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={rest}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default FunctionUpdaterExample;
