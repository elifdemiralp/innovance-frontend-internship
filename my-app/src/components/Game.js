import React, { useContext } from "react";
import calculateWinner from "../utils";
import Board from "./Board";
import Moves from "./Moves";
import { GameContext, useHistory } from "../game-context";

const Game = () => {
  const history = useHistory();
  const { stepNumber, isXNext } = useContext(GameContext);
  const winner = calculateWinner(history[stepNumber]);
  const nextPlayer = isXNext ? "X" : "O";
  return (
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <h3>History</h3>
          <h3>{winner ? "Winner: " + winner : "Next Player: " + nextPlayer}</h3>
          <Moves />
        </div>
      </div>
  );
};
export default Game;