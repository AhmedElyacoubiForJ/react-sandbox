import { useState, useEffect, useRef } from "react";

// what we want to do is basiclay count the number of rendered calls
function UseRefExample2() {
  const [name, setName] = useState("");

  // the first render call set to 1, per default
  const renders = useRef(1);
  const prevName = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current} </h1>
      <h2>Prev Name State: {prevName.current} </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefExample2;
