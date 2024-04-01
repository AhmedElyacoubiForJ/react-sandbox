import { useState } from "react";

import "./styles.css";

export default function TicTacToe() {
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const [board, setBoard] = useState(Array(9).fill(""));

  function Square() {
    return <button className="square">X</button>;
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
