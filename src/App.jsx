import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns,setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex,colIndex) {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === "X" ? "O" : "X";
    });

    setGameTurns((prevGameTurns) => {
      let currentPlayer='X';
      if(prevGameTurns.length%2===1){
        currentPlayer='O';
      }
      const updatedTurns = [{ square:{row:rowIndex,col:colIndex},player:currentPlayer },...prevGameTurns];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
    </main>
  );
}

export default App;
