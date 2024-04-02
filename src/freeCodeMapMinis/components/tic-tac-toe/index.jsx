import { useState, useEffect } from "react";

import "./styles.css";

export default function TicTacToe() {
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(index) {
    let squaresCopy = [...squares];

    if (getWinner(squaresCopy) || squaresCopy[index]) return;

    squaresCopy[index] = isXTurn ? "X" : "O";
    setSquares(squaresCopy);
    setIsXTurn(!isXTurn);
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  function getWinner(squares) {
    const winnersPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnersPattern.length; i++) {
      const [a, b, c] = winnersPattern[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function Square({ value, onClick }) {
    return (
      <button onClick={onClick} className="square">
        {value}
      </button>
    );
  }

  useEffect(() => {
    const winner = getWinner(squares);
    if(!winner && squares.every(item => item !== '') ) {
      setStatus('This is a draw! Please restart the game!');
    } else if(winner) {
      setStatus(`Winner is ${winner}, Please restart the game!`);
    } else {
      setStatus(`Next player is ${isXTurn? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart} >Restart</button>
    </div>
  );
}
