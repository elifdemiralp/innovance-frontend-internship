import * as React from 'react'
import calculateWinner from './utils';

export const GameContext = React.createContext()

export function GameProvider ({children}) {
    const [history, setHistory] = React.useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = React.useState(0);
    const [isXNext, setIsXNext] = React.useState(true);

    return (
    <GameContext.Provider value = {{history, setHistory, stepNumber, setStepNumber, isXNext, setIsXNext}}>
        {children}
    </GameContext.Provider>
    );
};

export const useHistory = () => {
    const context = React.useContext(GameContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a GameProvider')
    };

    return context.history;
};

export const useTakeTurn = () => {
    const context = React.useContext(GameContext);
    
    if (context === undefined) {
        throw new Error('useCount must be used within a GameProvider')
    };

    const { isXNext, setIsXNext, stepNumber, setStepNumber, history, setHistory } = context;

    const takeTurn = (i) => {
        const winner = calculateWinner(history[stepNumber]);
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

      if (winner || squares[i]) {
        return;
      };
      squares[i] = isXNext ? "X" : "O";
      setHistory([...historyPoint, squares]);
      setStepNumber(historyPoint.length);
      setIsXNext(!isXNext);
    };
    return takeTurn;
};
