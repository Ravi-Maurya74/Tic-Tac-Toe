
export default function GameBoard({ onSelectSquare, board }) {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleSelectSquare(rowIndex, cellIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const newGameBoard = [...prevGameBoard.map((row) => [...row])]; // to make a deep copy of the game board
  //       newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //       return newGameBoard;
  //     });
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => {
                    onSelectSquare(rowIndex, cellIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
