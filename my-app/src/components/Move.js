import React from 'react';

const Move = ({history, setStepNumber, setIsXNext}) => {
    const jumpTo = (step) => {
    
        setStepNumber(step);
        setIsXNext((step % 2) === 0);
    
    }
    const moves = history.map((item, index) => (
        <li>
            <button onClick={() => jumpTo(index)}>
                {index ? `Go to move # ${index}` : `Go to game start`}
            </button>
        </li>
    ));
    return <ol>{moves}</ol>;

};

export default Move;