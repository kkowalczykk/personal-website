import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC<{}> = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
      if (
        (ev.target && ev.target instanceof HTMLElement) ||
        ev.target instanceof SVGElement
      ) {
        const cursor = window.getComputedStyle(ev.target)['cursor'];
        if (cursor === 'pointer') {
          setCursorVariant('hover');
        } else {
          setCursorVariant('default');
        }
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const bigVariants = {
    default: {
      opacity: 0.6,
      height: 30,
      width: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      transition: {
        type: 'spring',
        mass: 0.05,
      },
    },
    hover: {
      opacity: 0,
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      transition: {
        type: 'spring',
        mass: 0.05,
      },
    },
  };
  const smallVariants = {
    default: {
      opacity: 1,
      height: 8,
      width: 8,
      backgroundColor: '#00E8B7',
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: 'spring',
        mass: 0.02,
        duration: 0.05,
      },
    },
    hover: {
      opacity: 0,
      height: 8,
      width: 8,
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: '#00E8B7',
      transition: {
        type: 'spring',
        mass: 0.02,
        duration: 0.05,
      },
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 200,
    damping: 1000,
  };

  return (
    <>
      <motion.div
        variants={bigVariants}
        className="border-teal-primar pointer-events-none fixed left-0 top-0 z-10 rounded-full border border-teal-primary"
        animate={cursorVariant}
        transition={spring}
      ></motion.div>
      <motion.div
        variants={smallVariants}
        className="border-teal-primar pointer-events-none fixed left-0 top-0 z-10 rounded-full border border-teal-primary"
        animate={cursorVariant}
        transition={spring}
      ></motion.div>
    </>
  );
};

export default Cursor;
