import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ backgroundColor: '#28459e', padding: '10px', textAlign: 'center' }}>
      <Link to="/">Home</Link> | <Link to="/rules">Rules</Link> | <Link to="/game/easy">Easy</Link> | <Link to="/game/medium">Medium</Link> | <Link to="/game/hard">Hard</Link>
    </nav>
  );
}

export default Header;
