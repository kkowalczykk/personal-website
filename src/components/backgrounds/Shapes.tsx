import { Shape, ShapeType } from '../geometric-shapes/Shape';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export const BgShapes: React.FC = () => {
  const [shapesGrid, setShapesGrid] = useState<null | any[][]>(null);

  // Create 4x5 array of nulls
  const shapes = Array.from({ length: 4 }, () =>
    Array.from({ length: 6 }, () => null)
  );

  const randomPosition = () => {
    // From 0 to 30 or from 70 to 100
    return Math.floor(Math.random() * 30 + (Math.random() > 0.5 ? 70 : 0));
  };

  const randomShape = () => {
    const shapes = ['triangle', 'circle', 'hexagon', 'cross', 'steps'];
    return shapes[Math.floor(Math.random() * shapes.length)] as ShapeType;
  };

  const randomColor = () => {
    const colors = ['#00E8B7', '#FFFFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const randomOpacity = () => {
    // From 20% to 40%
    return Math.floor(Math.random() * 20 + 20) / 100;
  };

  const randomSize = () => {
    // From 50 to 120
    return Math.floor(Math.random() * 70 + 50);
  };

  const randomDelay = () => {
    // From 0 to 4
    return Math.floor(Math.random() * 4);
  };

  const randomDuration = () => {
    // From 2 to 4
    return Math.floor(Math.random() * 2 + 2);
  };

  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const grid = shapes.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        return (
          <div
            className="relative h-full w-full"
            key={`${rowIndex}-${colIndex}`}
          >
            <motion.div
              className="absolute top-0"
              initial={{ opacity: 0, left: 50, top: 50 }}
              animate={{
                opacity: 1,
                left: randomPosition(),
                top: randomPosition(),
              }}
              transition={{ delay: randomDelay(), duration: randomDuration() }}
            >
              <Shape
                type={randomShape()}
                stroke={randomColor()}
                opacity={randomOpacity()}
                size={randomSize()}
              />
            </motion.div>
          </div>
        );
      });
    });
    setShapesGrid(grid);

    recalculateStyles();
    const handleScroll = (e: Event) => {
      recalculateStyles();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const recalculateStyles = () => {
    const scale = 1 + window.scrollY / 5000;
    setScale(scale);
    const opacity = 1 - window.scrollY / 700;
    setOpacity(opacity);
  };

  return (
    <>
      <div className="bgShapes pointer-events-none absolute top-0 left-0 h-screen w-full pt-24">
        {shapesGrid && (
          <motion.div
            className="container relative mx-auto grid h-full w-full grid-cols-6 grid-rows-4"
            style={{ opacity: opacity, scale: scale }}
          >
            {shapesGrid}
          </motion.div>
        )}
      </div>
    </>
  );
};
