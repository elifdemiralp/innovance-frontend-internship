import React from "react";
import { useTakeTurn } from "../game-context";
const Square = ({ value, index }) => {
const takeTurn = useTakeTurn(index);
  return (
    <button className="square" onClick={takeTurn}>
      {value}
    </button>
  );
};

export default Square;