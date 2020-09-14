import React from 'react';
import Game from './components/Game'

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <Game gameWidth={GAME_WIDTH} gameHeight={GAME_HEIGHT}/>
      </body>
    </div>
  );
}

export default App;
