import { useCallback } from 'react';
import * as PIXI from 'pixi.js';
import { Graphics } from '@pixi/react';
import { TILE_SIZE } from '../config';

/**
 * 테트로미노를 이루는 타일(사각형)을 관리하는 컴포넌트
 */
export default function Tile({ x, y, color }: TileProps) {
  const draw = useCallback(
    (g: PIXI.Graphics) => {
      g.clear();

      // 흰색 배경 (타일 색상을 잘 보이게 하기 위함)
      g.beginFill('white');
      g.drawRect(x, y, TILE_SIZE, TILE_SIZE);
      g.endFill();

      // 기본 색상
      g.beginFill(color, 0.5);
      g.drawRect(x, y, TILE_SIZE, TILE_SIZE);
      g.endFill();

      // 삼각형 2개를 겹쳐서 X자 무늬 형성
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

      // 타일 테두리
      g.lineStyle(1, color, 0.1);
      g.drawRect(x, y, TILE_SIZE, TILE_SIZE);
    },
    [x, y, color],
  );

  return <Graphics draw={draw} />;
}
