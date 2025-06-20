'use client';

import React, { useEffect, useRef, useCallback } from 'react';

export default function CircuitBoardBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isInitialized = useRef(false);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitialized.current) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    const spacing = 60;
    const gridColor = 'rgba(0, 150, 0, 0.3)';
    const lightBaseColor = '0,255,180';    
    
    canvas.width = width;
    canvas.height = height;

    // create moving lights with random radius
    const numLights = 30;
    const lights = Array.from({ length: numLights }, () => {
      const horiz = Math.random() < 0.5;
      return {
        horiz,
        x: horiz 
          ? Math.random() * width 
          : Math.floor(Math.random() * (width / spacing)) * spacing,
        y: horiz 
          ? Math.floor(Math.random() * (height / spacing)) * spacing 
          : Math.random() * height,
        speed: (Math.random() * 0.04 + 0.02) * (horiz ? width : height),
        radius: Math.random() * 2 + 2,       
      };
    });

    let lastTime = 0;

    function drawGrid() {
      ctx.beginPath();
      for (let x = 0; x <= width; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
            ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function animate(time) {
      const dt = time - (lastTime || time);
      lastTime = time;

      // fully clear each frame
      ctx.clearRect(0, 0, width, height);
      drawGrid();

      lights.forEach(light => {
        // move
        if (light.horiz) {
          light.x += light.speed * (dt / 1000);
          if (light.x > width + 10) light.x = -10;
        } else {
          light.y += light.speed * (dt / 1000);
          if (light.y > height + 10) light.y = -10;
        }

        // draw glow + flicker
        const alpha = 0.7 + Math.random() * 0.3;  // flicker between .7–1
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${lightBaseColor},${alpha})`;
        ctx.fillStyle = `rgba(${lightBaseColor},${alpha})`;
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;  // reset for next shapes
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // reposition lights on grid
      lights.forEach(light => {
        if (light.horiz) {
          light.y = Math.floor(Math.random() * (height / spacing)) * spacing;
          light.x = Math.random() * width;
        } else {
          light.x = Math.floor(Math.random() * (width / spacing)) * spacing;
          light.y = Math.random() * height;
        }
      });
    }

    window.addEventListener('resize', onResize);
    animationRef.current = requestAnimationFrame(animate);
    isInitialized.current = true;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', onResize);
      isInitialized.current = false;
    };
  }, []);

  useEffect(() => {
    initializeCanvas();
  }, [initializeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10"
      style={{ background: '#0a0f0a' }}
    />
  );
}
