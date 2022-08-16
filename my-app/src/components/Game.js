import React, { useState } from "react";
import calculateWinner from "../utils";
import Board from "./Board";
import Move from "./Move";

function Game(props) {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
  
    const handleClick = (i) => {
      const historyPoint = history.slice(0, stepNumber + 1);
      const current = historyPoint[stepNumber];
      const squares = [...current];

      if (winner || squares[i]) {
        return;
      }
      squares[i] = isXNext ? "X" : "O";
      setHistory([...historyPoint, squares]);
      setStepNumber(historyPoint.length);
      setIsXNext(!isXNext);
    }
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (isXNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={history[stepNumber]}
              onClick={handleClick}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <Move
            history={history}
            setStepNumber={setStepNumber}
            setIsXNext={setIsXNext}
            />
          </div>
        </div>
      );
}

export default Game;