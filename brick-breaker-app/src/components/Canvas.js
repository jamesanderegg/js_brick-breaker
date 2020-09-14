import React, { useRef, useEffect } from "react";
import "../styles/canvas.css";
const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    draw(ctx)
  }, [draw]);

  return <canvas id="game-canvas" ref={canvasRef} {...props} />;
};

export default Canvas;
