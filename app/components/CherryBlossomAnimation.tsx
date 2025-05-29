import React, { useEffect, useState } from 'react';

interface Petal {
  id: string;
  initialX: number;
  initialY: number;
  popUpX: number;
  popUpY: number;
  fallEndX: number;
  fallEndY: number;
  rotateStart: number;
  rotateEnd: number;
  delay: number;
  duration: number;
}

const PETAL_PATH = "M 0,0 C 5,-15 15,-15 20,0 C 15,15 5,15 0,0 Z";

function getRandomPetal(width: number, height: number, spawnWidth: number, imageTop: number): Petal {
  const initialX = (width - spawnWidth) / 2 + Math.random() * spawnWidth;
  const initialY = imageTop;
  const popUpY = -15 - Math.random() * 10;
  const popUpX = (Math.random() - 0.5) * 100;
  const fallEndX = (Math.random() - 0.5) * width * 1.2;
  const fallEndY = height + 100;
  const rotateStart = Math.random() * 360 - 180;
  const rotateEnd = rotateStart + (Math.random() > 0.5 ? 1 : -1) * (360 * (1 + Math.random() * 2));
  const delay = Math.random() * 1000;
  const duration = 3000 + Math.random() * 1000;
  return {
    id: Math.random().toString(36).slice(2, 11),
    initialX, initialY, popUpX, popUpY, fallEndX, fallEndY, rotateStart, rotateEnd, delay, duration
  };
}

const CherryBlossomAnimation: React.FC<{
  width?: number;
  height?: number;
  petalCount?: number;
  petalColor?: string;
  className?: string;
  imageTop?: number;
  spawnWidth?: number;
}> = ({
  width = 600,
  height = 600,
  petalCount = 80,
  petalColor = '#ffb3c1',
  className = '',
  imageTop = 30,
  spawnWidth = 600,
}) => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setPetals(Array.from({ length: petalCount }, () =>
      getRandomPetal(width, height, spawnWidth, imageTop)
    ));
    const timer = setTimeout(() => setVisible(false), 4000);
    const timer2 = setTimeout(() => setPetals([]), 5000);
    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, [width, height, petalCount, spawnWidth, imageTop]);

  return (
    <div
      className={className}
      style={{
        width, height,
        position: 'relative',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 1s ease'
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        {petals.map(petal => (
          <path
            key={petal.id}
            d={PETAL_PATH}
            fill={petalColor}
            style={{
              transformOrigin: 'center center',
              animation: `petalAnim${petal.id} ${petal.duration}ms ease-in-out ${petal.delay}ms forwards`,
              opacity: 1
            }}
          />
        ))}
        <style>
          {petals.map(petal => `
            @keyframes petalAnim${petal.id} {
              0% {
                transform: translate(${petal.initialX}px, ${petal.initialY}px) scale(0.3) rotate(${petal.rotateStart}deg);
                opacity: 1;
              }
              10% {
                transform: translate(${petal.popUpX}px, ${petal.popUpY}px) scale(1) rotate(${petal.rotateStart}deg);
                opacity: 1;
              }
              100% {
                transform: translate(${petal.fallEndX}px, ${petal.fallEndY}px) scale(0) rotate(${petal.rotateEnd}deg);
                opacity: 1;
              }
            }
          `).join('\n')}
        </style>
      </svg>
    </div>
  );
};

export default CherryBlossomAnimation; 