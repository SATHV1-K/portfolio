import React, { useEffect, useRef } from 'react';

const SplashCursor = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const splatsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('SplashCursor: Canvas not found');
      return;
    }
    console.log('SplashCursor: Canvas found, initializing');

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('SplashCursor: 2D context not supported');
      return;
    }
    console.log('SplashCursor: 2D context created successfully');

    // Configuration
    const config = {
      FLOW_LENGTH: 80,
      FLOW_WIDTH: 15,
      FADE_SPEED: 0.015,
      MAX_FLOWS: 15,
      TRAIL_SEGMENTS: 8
    };

    // Website-compatible color palette
    const colorPalette = [
      { r: 102, g: 126, b: 234 },  // #667eea (primary blue)
      { r: 118, g: 75, b: 162 },   // #764ba2 (purple)
      { r: 159, g: 122, b: 234 },  // #9f7aea (light purple)
      { r: 79, g: 172, b: 254 },   // #4facfe (light blue)
      { r: 147, g: 197, b: 253 },  // #93c5fd (very light blue)
      { r: 196, g: 181, b: 253 }   // #c4b5fd (very light purple)
    ];

    // Flow effect functions
    function createFlow(x, y, velocityX, velocityY) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const flow = {
        segments: [],
        color: color,
        alpha: 0.8,
        velocityX: velocityX * 0.5,
        velocityY: velocityY * 0.5
      };
      
      // Create initial segment
      for (let i = 0; i < config.TRAIL_SEGMENTS; i++) {
        flow.segments.push({
          x: x - (velocityX * i * 2),
          y: y - (velocityY * i * 2),
          age: i
        });
      }
      
      splatsRef.current.push(flow);
      
      // Limit number of flows
      if (splatsRef.current.length > config.MAX_FLOWS) {
        splatsRef.current.shift();
      }
    }

    // Canvas resize function
    function resizeCanvas() {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
    }
    
    // Render function
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and render flows
      splatsRef.current.forEach((flow, index) => {
        // Fade out flow
        flow.alpha -= config.FADE_SPEED;
        
        if (flow.alpha <= 0) {
          splatsRef.current.splice(index, 1);
          return;
        }
        
        // Update flow segments
        const head = flow.segments[0];
        head.x += flow.velocityX;
        head.y += flow.velocityY;
        
        // Move segments along the trail
        for (let i = flow.segments.length - 1; i > 0; i--) {
          flow.segments[i].x = flow.segments[i - 1].x;
          flow.segments[i].y = flow.segments[i - 1].y;
          flow.segments[i].age++;
        }
        
        // Draw flowing trail
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        for (let i = 0; i < flow.segments.length - 1; i++) {
          const segment = flow.segments[i];
          const nextSegment = flow.segments[i + 1];
          
          // Calculate segment alpha based on position in trail
          const segmentAlpha = flow.alpha * (1 - (i / flow.segments.length)) * 0.8;
          
          // Calculate line width based on position in trail
          const lineWidth = config.FLOW_WIDTH * (1 - (i / flow.segments.length));
          
          if (segmentAlpha > 0 && lineWidth > 0.5) {
            ctx.strokeStyle = `rgba(${flow.color.r}, ${flow.color.g}, ${flow.color.b}, ${segmentAlpha})`;
            ctx.lineWidth = lineWidth;
            
            ctx.beginPath();
            ctx.moveTo(segment.x, segment.y);
            ctx.lineTo(nextSegment.x, nextSegment.y);
            ctx.stroke();
          }
        }
        
        // Add some particle effects at the head
        const headAlpha = flow.alpha * 0.6;
        if (headAlpha > 0) {
          const gradient = ctx.createRadialGradient(
            head.x, head.y, 0,
            head.x, head.y, config.FLOW_WIDTH * 0.8
          );
          
          gradient.addColorStop(0, `rgba(${flow.color.r}, ${flow.color.g}, ${flow.color.b}, ${headAlpha})`);
          gradient.addColorStop(1, `rgba(${flow.color.r}, ${flow.color.g}, ${flow.color.b}, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(head.x, head.y, config.FLOW_WIDTH * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    // Initialize canvas
    resizeCanvas();
    
    // Mouse event handling
    let lastMousePos = { x: 0, y: 0 };
    let lastTime = Date.now();
    
    function updatePointer(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      
      // Calculate velocity
      const velocityX = (x - lastMousePos.x) / Math.max(deltaTime, 1) * 10;
      const velocityY = (y - lastMousePos.y) / Math.max(deltaTime, 1) * 10;
      
      // Only create flow if there's significant movement
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      if (speed > 0.5) {
        console.log('SplashCursor: Creating flow at:', x, y, 'velocity:', velocityX, velocityY);
        createFlow(x, y, velocityX, velocityY);
      }
      
      pointerRef.current.x = x;
      pointerRef.current.y = y;
      lastMousePos.x = x;
      lastMousePos.y = y;
      lastTime = currentTime;
    }

    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', updatePointer);
    window.addEventListener('touchmove', (e) => {
      updatePointer(e.touches[0]);
    });

    // Animation loop
    function animate() {
      render();
      animationRef.current = requestAnimationFrame(animate);
    }

    console.log('SplashCursor: Starting animation loop');
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', updatePointer);
      window.removeEventListener('touchmove', (e) => {
        updatePointer(e.touches[0]);
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default SplashCursor;