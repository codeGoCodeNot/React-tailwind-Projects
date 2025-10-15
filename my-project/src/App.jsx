import React, { useState } from "react";
// useState alway return array with 2 element in it
// currentValue,
// function to Update

// Functions starting with use are called Hooks

export const Square = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [value, setValue] = useState(Array(9).fill(null));

  const winner = calculateWinner(value);

  const handleClick = (idx) => {
    if (value[idx] || winner) return;
    const refVal = value.slice();
    if (xIsNext) {
      refVal[idx] = "X";
    } else {
      refVal[idx] = "O";
    }
    setValue(refVal);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <div className="show-winner text-lg">
        {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
      </div>
      <div className="board-row">
        {value.map((val, i) => (
          <button
            className="square hover:bg-slate-300 hover:text-slate-800 text-slate-600"
            onClick={() => handleClick(i)}
            key={i}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );
};

const calculateWinner = (value) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a];
    }
  }
  return null;
};
