const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  turns.forEach((turn) => {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  });

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
      {gameBoard.map((row, rowIndex) => (
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
