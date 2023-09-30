/**
 * 테트로미노를 이루는 타일 하나 당 너비 (픽셀 단위)
 */
export const TILE_SIZE = 32;

/**
 * 테트로미노를 이루는 각 타일의 위치와 색상을 설정하는 객체
 */
export const tetrominoConfig: TetrominoConfig = {
  I: {
    color: '#006666',
    coords: [
      [0, 0],
      [TILE_SIZE, 0],
      [TILE_SIZE * 2, 0],
      [TILE_SIZE * 3, 0],
    ],
  },
  O: {
    color: '#666600',
    coords: [
      [0, 0],
      [0, TILE_SIZE],
      [TILE_SIZE, 0],
      [TILE_SIZE, TILE_SIZE],
    ],
  },
  T: {
    color: '#660066',
    coords: [
      [TILE_SIZE, 0],
      [0, TILE_SIZE],
      [TILE_SIZE, TILE_SIZE],
      [TILE_SIZE * 2, TILE_SIZE],
    ],
  },
  L: {
    color: '#663300',
    coords: [
      [TILE_SIZE * 2, 0],
      [0, TILE_SIZE],
      [TILE_SIZE, TILE_SIZE],
      [TILE_SIZE * 2, TILE_SIZE],
    ],
  },
  J: {
    color: '#000066',
    coords: [
      [0, 0],
      [0, TILE_SIZE],
      [TILE_SIZE, TILE_SIZE],
      [TILE_SIZE * 2, TILE_SIZE],
    ],
  },
  S: {
    color: '#006600',
    coords: [
      [TILE_SIZE, 0],
      [TILE_SIZE * 2, 0],
      [0, TILE_SIZE],
      [TILE_SIZE, TILE_SIZE],
    ],
  },
  Z: {
    color: '#660000',
    coords: [
      [0, 0],
      [TILE_SIZE, 0],
      [TILE_SIZE, TILE_SIZE],
      [TILE_SIZE * 2, TILE_SIZE],
    ],
  },
};
