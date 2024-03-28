// useState() = Re-renders the Component when the state value changes.

// useRef() = "Use Reference" Does not cause the Component to re-render when its value changes.
//            When you want the Component to remenber some information,
//            but you don't want that information  to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations and transitions
//            3. Managing Timers and Intervals

import React, { useState, useRef, useEffect } from "react";
function UseRefExample() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  // will be executed when component re-rendered
  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }
  return (
    <>
      <button onClick={handleClick1}>Click me 1!</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2!</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3!</button>
      <input ref={inputRef3} />
    </>
  );
}

export default UseRefExample;
