import { useEffect, useRef, useState } from 'react';

import { calculatePosition, drawPlayer, renderTile } from '../canvas/draw';
import MapController from './map-controller';

// 이동처리, 충돌처리 등을 위한 함수

const vectorMap: {
  [key: string]: { x: number; y: number };
} = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export function MapInterface() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 0 });

  const config = { width: 800, height: 800 };

  const handleKeyDown = (e: KeyboardEvent) => {
    const vector = vectorMap[e.key];
    if (!vector) return;

    const nextPosition = calculatePosition(playerPosition, vector);

    setPlayerPosition(nextPosition);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerPosition]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    renderTile(ctx, config);
    drawPlayer(ctx, config, { x: playerPosition.x, y: playerPosition.y });
  }, [playerPosition]);

  return (
    <div className="h-svh flex flex-col gap-4 justify-center items-center">
      <canvas
        ref={canvasRef}
        id="canvas"
        width="800"
        height="800"
        className="border w-full aspect-square"
      ></canvas>
      <div>
        <MapController
          onMove={(direction) => {
            const nextPosition = calculatePosition(playerPosition, direction);
            setPlayerPosition(nextPosition);
          }}
        />
      </div>
    </div>
  );
}
