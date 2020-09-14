import React from 'react';
import "../styles/game.css"

function Game({gameWidth, gameHeight}) {
  return (
    <div className="game">
      <canvas id="gameScreen" width={gameWidth} height={gameHeight}></canvas>
    </div>
  );
}

export default Game;