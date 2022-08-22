import React from "react";
import Game from "./components/Game";
import { GameProvider } from "./game-context";
const App = () => (
    <GameProvider>
        <Game/>
    </GameProvider>
)
export default App;