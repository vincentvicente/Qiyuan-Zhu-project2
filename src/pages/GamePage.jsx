import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../components/Board';

function GamePage() {
  const { difficulty } = useParams();
  const [gameKey, setGameKey] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const boardConfig = {
    easy: { rows: 8, cols: 8, mines: 10 },
    medium: { rows: 16, cols: 16, mines: 40 },
    hard: { rows: 16, cols: 30, mines: 99 },
  };

  const resetGame = () => {
    setGameKey((prevKey) => prevKey + 1);
    setGameStatus("");
  };

  const handleGameEnd = (status) => {
    setGameStatus(status);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Minesweeper - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level</h1>
      {gameStatus && <h2>{gameStatus}</h2>}
      <button onClick={resetGame} style={{ marginBottom: '20px' }}>Reset Game</button>
      <Board key={gameKey} config={boardConfig[difficulty]} onGameEnd={handleGameEnd} />
    </div>
  );
}

export default GamePage;
