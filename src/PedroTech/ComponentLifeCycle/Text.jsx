import React from "react";
import { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("COMPONET MOUNTED");

    return () => {
      console.log("COMPONET UNMOUNTED");
    };
  }, []);

  return (
    <div>
      <input onChange={(event) => setText(event.target.value)} />
      <h1> {text} </h1>
    </div>
  );
};

export default Text;
