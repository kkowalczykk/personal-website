import { motion, useAnimationControls } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { isLoadedAtom, mountPageAtom } from './MainLayout';

export const MainLayoutLoader: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children }) => {
  const svgControls = useAnimationControls();
  const barControls = useAnimationControls();
  const barContainerControls = useAnimationControls();
  const componentControls = useAnimationControls();
  const [isLoaded, setIsLoaded] = useAtom(isLoadedAtom);
  const [mountPage, setMountPage] = useAtom(mountPageAtom);
  const svgVariants = {
    visible: {
      scale: 1,
    },
    hidden: {
      scale: 0.3,
      opacity: 0,
    },
  };
  const barVariants = {
    visible: {
      width: '100%',
    },
    hidden: {
      width: '0%',
    },
  };
  useEffect(() => {
    sequence();
  }, []);

  const sequence = async () => {
    svgControls.start(
      { opacity: 1 },
      {
        duration: 0.4,
        type: 'tween',
        ease: 'easeIn',
      }
    );
    barContainerControls.start(
      { opacity: 1 },
      {
        duration: 0.4,
        type: 'tween',
        ease: 'easeIn',
      }
    );
    svgControls.start('visible', {
      duration: 1.7,
      type: 'spring',
      bounce: 0.6,
    });
    await barControls.start('visible', {
      duration: 1.7,
      type: 'tween',
      ease: 'easeIn',
    });

    barContainerControls.start(
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        duration: 1,
        type: 'spring',
        bounce: 0,
        stiffness: 120,
      }
    );
    svgControls.start(
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        duration: 1,
        type: 'spring',
        bounce: 0,
        stiffness: 120,
      }
    );
    // Wait 0.8 seconds before starting the exit animation
    await new Promise((resolve) => setTimeout(resolve, 500));

    setMountPage(true);

    await componentControls.start(
      { opacity: 0 },
      {
        duration: 0.3,
        type: 'tween',
        ease: 'easeIn',
      }
    );

    setIsLoaded(true);
  };

  return (
    <motion.div
      animate={componentControls}
      className="MainLayoutLoader fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-radial from-dark-secondary to-dark-secondary"
    >
      <div className="logo">
        <motion.svg
          animate={svgControls}
          variants={svgVariants}
          initial="hidden"
          className="w-14"
          viewBox="0 0 38 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9635 0.000313754H1.97101L0 2.11896V33.3858L1.74483 34.9971H10.8796C10.8796 34.9971 12.4748 35.1314 12.4748 33.6207C12.4748 32.1101 12.4412 26.185 12.4412 26.185L9.93924 23.2644L8.91494 24.3218V31.4387L3.57514 31.4051L3.54996 3.45802L8.91494 3.44963L8.92333 10.3902L9.84688 11.4393L12.5168 8.7537L12.4748 1.45221C12.4748 1.45221 12.4412 0.000305176 10.9635 0.000305176L10.9635 0.000313754Z"
            fill="#f05b16"
          />
          <path
            d="M23.7251 0L7.5379 17.423L23.6581 34.7786H35.1438C35.1438 34.7786 37.6287 34.9802 37.6875 33.7381C37.7463 32.496 37.2427 32.0259 37.2427 32.0259L23.581 17.4416L36.8648 3.16409C36.8648 3.16409 37.6542 2.56821 37.6542 1.30933C37.6542 0.0504471 36.2855 0.0337029 36.2855 0.0337029L23.7251 0ZM31.651 3.49142L18.6876 17.4567L31.6176 31.2876L25.2365 31.3883L12.4076 17.4567L25.3039 3.52512L31.651 3.49142Z"
            fill="#f05b16"
          />
        </motion.svg>
      </div>
      <div className="loading-bar mt-8">
        <motion.div
          animate={barContainerControls}
          initial={{ opacity: 0 }}
          className="loading-bar__bar h-4 w-32 rounded-full border border-orange-primary/60 p-1"
        >
          <motion.div
            animate={barControls}
            variants={barVariants}
            initial="hidden"
            className="loading-bar__bar__fill h-full w-full origin-left rounded-full bg-orange-primary"
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
