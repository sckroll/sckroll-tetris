import { useCallback, useEffect, useState } from 'react';

const DEBOUNCE_TIME = 500;

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [timeoutId, setTimeoutId] = useState<number>();

  const handleResize = useCallback(() => {
    clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, DEBOUNCE_TIME);

    setTimeoutId(newTimeoutId);
  }, [timeoutId]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return { ...windowSize };
}
