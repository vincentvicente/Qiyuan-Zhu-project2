import React from 'react';

function Cell({ isMine, isRevealed, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: isRevealed ? (isMine ? 'red' : '#bbb') : 'lightgray', // 更明显的已点击颜色
        color: isRevealed && isMine ? 'white' : 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #999',
        cursor: 'pointer',
      }}
    >
      {isRevealed && (isMine ? '💣' : '')}
    </div>
  );
}

export default Cell;
