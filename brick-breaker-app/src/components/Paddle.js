import React, { useEffect } from 'react';


function Paddle({gameWidth, gameHeight, ctx}) {
    const paddleWidth = 150;
    const paddleHeight = 30;
    const postition = {
        x: gameWidth/2 - paddleWidth /2,
        y: gameHeight - paddleHeight - 10
    }

    const draw =(ctx)=>{
        ctx.fillStyle = "#0ff";
        ctx.fillRect(postition.x, postition.y, paddleWidth, paddleHeight)
    };
    useEffect((ctx) => {
        draw(ctx)
    
    })
}

export default Paddle;