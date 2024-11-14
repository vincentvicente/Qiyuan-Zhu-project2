import React, { useState, useEffect } from 'react';
import Cell from './Cell';

function Board({ config, onGameEnd }) {
  const { rows, cols, mines } = config;
  const [board, setBoard] = useState([]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false); // 添加游戏结束状态

  useEffect(() => {
    const generateBoard = () => {
      const newBoard = Array(rows).fill().map(() => Array(cols).fill({ isMine: false, isRevealed: false }));

      let placedMines = 0;
      while (placedMines < mines) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        if (!newBoard[r][c].isMine) {
          newBoard[r][c] = { isMine: true, isRevealed: false };
          placedMines++;
        }
      }
      setBoard(newBoard);
      setRevealedCount(0);
      setIsGameOver(false); // 重置游戏结束状态
    };
    generateBoard();
  }, [rows, cols, mines]);

  const revealCell = (row, col) => {
    if (isGameOver) return; // 如果游戏结束，禁用点击操作

    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
    const cell = newBoard[row][col];

    if (cell.isRevealed) return;

    cell.isRevealed = true;
    setBoard(newBoard);

    if (cell.isMine) {
      setIsGameOver(true); // 游戏结束
      onGameEnd("Game over! You lost!");
    } else {
      const newRevealedCount = revealedCount + 1;
      setRevealedCount(newRevealedCount);

      if (newRevealedCount === rows * cols - mines) {
        setIsGameOver(true); // 游戏胜利
        onGameEnd("Game over! You Won!");
      }
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 30px)`, gap: '2px', justifyContent: 'center' }}>
      {board.map((row, rIndex) =>
        row.map((cell, cIndex) => (
          <Cell
            key={`${rIndex}-${cIndex}`}
            isMine={cell.isMine}
            isRevealed={cell.isRevealed}
            onClick={() => revealCell(rIndex, cIndex)}
          />
        ))
      )}
    </div>
  );
}

export default Board;
