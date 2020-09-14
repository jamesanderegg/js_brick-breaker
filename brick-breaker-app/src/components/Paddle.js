import React from 'react';
import "../styles/paddle.css"

function Paddle({gameWidth, gameHeight}) {
  return (
    <div className="game">
      <canvas id="gameScreen" width={gameWidth} height={gameHeight}></canvas>
    </div>
  );
}

export default Paddle;