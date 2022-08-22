import * as React from 'react';
import Square from './Square';
import {GameContext, useHistory, useTakeTurn} from '../game-context';

const Board = () => {
    const takeTurn = useTakeTurn();
    const history = useHistory();
    const { stepNumber } = React.useContext(GameContext);
    return (
      <div className="board">
        {history[stepNumber].map((square, i) => (
          <Square key={i} value={square} onClick={() => takeTurn(i)} />
        ))}
      </div>
    )
  };
  export default Board;