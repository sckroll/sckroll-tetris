type TetrominoType = 'I' | 'O' | 'T' | 'L' | 'J' | 'S' | 'Z';

type ShapeBase = {
  x: number;
  y: number;
};

type TileProps = { color: string } & ShapeBase;

type TetrominoProps = { type: TetrominoType } & ShapeBase;

type TetrominoConfig = {
  [key in TetrominoType]: {
    color: string;
    coords: number[][];
  };
};
