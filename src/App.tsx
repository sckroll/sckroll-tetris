import { Stage, Container } from '@pixi/react';
// import useWindowResize from './hooks/useWindowResize';
import Tile from './components/Tile';
import { TILE_SIZE, tetrominoConfig } from './config';
import { useEffect } from 'react';

const availableKeys = new Set([
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
]);

const Tetromino = ({ type, x, y }: TetrominoProps) => {
  const { color, coords } = tetrominoConfig[type];
  return coords.map(([dx, dy], i) => (
    <Tile key={i} x={x + dx} y={y + dy} color={color} />
  ));
};

export default function App() {
  // const { width, height } = useWindowResize();

  useEffect(() => {
    const keyboardEventHandler = ({ key }: KeyboardEvent) => {
      if (!availableKeys.has(key)) return;

      console.log(key);
    };
    window.addEventListener('keydown', keyboardEventHandler);
    return () => {
      window.removeEventListener('keydown', keyboardEventHandler);
    };
  }, []);

  return (
    <Stage
      width={TILE_SIZE * 10}
      height={TILE_SIZE * 20}
      options={{
        antialias: true,
        // backgroundColor: new PIXI.Color('white').toNumber(),
        backgroundAlpha: 0,
      }}
    >
      <Container>
        <Tetromino type="I" x={0} y={0} />
        <Tetromino type="O" x={0} y={TILE_SIZE * 2} />
        <Tetromino type="T" x={0} y={TILE_SIZE * 5} />
        <Tetromino type="L" x={0} y={TILE_SIZE * 8} />
        <Tetromino type="J" x={0} y={TILE_SIZE * 11} />
        <Tetromino type="S" x={0} y={TILE_SIZE * 14} />
        <Tetromino type="Z" x={0} y={TILE_SIZE * 17} />
      </Container>
    </Stage>
  );
}
