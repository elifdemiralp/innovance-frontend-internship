import { useContext } from 'react'
import {GameContext, useHistory} from '../game-context';

const Moves = () => {
    const history = useHistory();
    const { setStepNumber, setIsXNext } = useContext(GameContext);
    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext(step % 2 === 0);
    };
    return (
        <ol>
            {history.map((_step, index) => (
                <li>
                    <button onClick={() => jumpTo(index)}>
                        {index ? `Go to move # ${index}` : `Go to game start`}
                    </button>
                </li>
            ))}
        </ol>
    )
}
export default Moves;