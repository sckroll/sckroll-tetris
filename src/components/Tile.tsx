import { useCallback } from 'react';
import * as PIXI from 'pixi.js';
import { Graphics } from '@pixi/react';
import { TILE_SIZE } from '../config';

export default function Tile({ x, y, color }: TileProps) {
  const draw = useCallback(
    (g: PIXI.Graphics) => {
      g.clear();

      g.beginFill('white');
      g.drawRect(x, y, TILE_SIZE, TILE_SIZE);
      g.endFill();

      g.beginFill(color, 0.5);
      g.drawRect(x, y, TILE_SIZE, TILE_SIZE);
      g.endFill();

      g.beginFill(color, 0.25);
      g.drawPolygon(x, y, x + TILE_SIZE, y + TILE_SIZE, x, y + TILE_SIZE);
      g.drawPolygon(
        x + TILE_SIZE,
        y,
        x + TILE_SIZE,
        y + TILE_SIZE,
        x,
        y + TILE_SIZE,
      );
      g.endFill();
    },
    [x, y, color],
  );

  return <Graphics draw={draw} />;
}
