import React from 'react';

const Moves = ({history, setStepNumber, setIsXNext}) => {
    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext((step % 2) === 0);
    }
    return <ol>
        {history.map((item, index) => (
            <li>
                <button onClick={() => jumpTo(index)}>
                    {index ? `Go to move # ${index}` : `Go to game start`}
                </button>
            </li>
        ))}
    </ol>

};

export default Moves;