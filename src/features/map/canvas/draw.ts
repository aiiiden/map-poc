import { mapLayerTiles } from '../config';

export interface MapConfig {
  width: number;
  height: number;
}

export function renderTile(ctx: CanvasRenderingContext2D, config: MapConfig) {
  drawMap(ctx, config, mapLayerTiles);
}

function drawMap(
  ctx: CanvasRenderingContext2D,
  config: MapConfig,
  map: string,
) {
  const mapData = map.split('\n').map((row) => row.split(' '));

  const cellSize = config.width / mapData.length;

  mapData.forEach((row, y) => {
    row.forEach((cell, x) => {
      const tile = cell.trim();
      const img = new Image();
      img.src = `/tile/${tile}.png`;

      img.onload = () => {
        ctx.drawImage(img, x * cellSize, y * cellSize, cellSize, cellSize);
      };
    });
  });
}

export function drawPlayer(
  ctx: CanvasRenderingContext2D,
  config: MapConfig,
  position: { x: number; y: number },
) {
  const cellSize = config.width / 8;

  const img = new Image();
  img.src = '/tile/player.png';

  img.onload = () => {
    ctx.drawImage(
      img,
      position.x * cellSize,
      position.y * cellSize,
      cellSize,
      cellSize,
    );
  };
}

export function calculatePosition(
  position: { x: number; y: number },
  direction: { x: number; y: number },
) {
  // 맵 밖으로 나가지 않도록 처리

  const nextPosition = {
    x: position.x + direction.x,
    y: position.y + direction.y,
  };

  const isOutSide = checkIsOutSide(nextPosition);
  const isrock = checkIsrock(nextPosition);

  if (isOutSide) return position;

  if (isrock) return position;

  return nextPosition;
}

function checkIsOutSide(position: { x: number; y: number }) {
  if (position.x < 0 || position.x >= 8) return true;
  if (position.y < 0 || position.y >= 8) return true;

  return false;
}

function checkIsrock(position: { x: number; y: number }) {
  if (position.y < 0) return false;
  if (position.x < 0) return false;

  const mapData = mapLayerTiles.split('\n').map((row) => row.split(' '));
  console.log(position);
  const tile = mapData[position.y][position.x];

  return tile === 'rock';
}
