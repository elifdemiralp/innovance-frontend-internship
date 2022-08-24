import * as React from 'react';
import Square from './Square';
import {GameContext, useHistory} from '../game-context';

const Board = () => {

    const history = useHistory();
    const { stepNumber } = React.useContext(GameContext);
    return (
      <div className="board">
        {history[stepNumber].map((square, i) => (
          <Square key={i} value={square} index={i} />
        ))}
      </div>
    )
  };
  export default Board;