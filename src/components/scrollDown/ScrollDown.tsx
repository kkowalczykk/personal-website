import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollDown: React.FC<{}> = () => {
  const [sequenceInitiator, setSequenceInitiator] = useState(false);
  const shapeVariants = {
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      pathLength: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const shapeControls = useAnimationControls();

  const footprintVariants = {
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.7,
      },
    },
    hidden: {
      pathLength: 0,
      transition: {
        duration: 0,
      },
    },
  };
  const footprintControls = useAnimationControls();

  const arrowGroupVariants = {
    visible: {
      y: 10,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const arrowGroupControls = useAnimationControls();

  const arrowElementControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    sequence();
  }, [sequenceInitiator]);

  const sequence = async () => {
    svgControls.start({ opacity: 1, transition: { duration: 0.5 } });
    shapeControls.start('visible');

    // Start footprint animation 300 ms before shape animation ends
    await new Promise((resolve) =>
      setTimeout(
        resolve,
        shapeVariants.visible.transition.duration * 1000 - 300
      )
    );
    footprintControls.start('visible');

    await new Promise((resolve) =>
      setTimeout(
        resolve,
        footprintVariants.visible.transition.duration * 1000 - 380
      )
    );

    await arrowElementControls.start({ opacity: 1 });

    for (let i = 0; i < 4; i++) {
      await arrowGroupControls.start('visible');
      await arrowGroupControls.start('hidden');
    }
    arrowElementControls.start({ opacity: 0 });
    // await arrowGroupControls.start('visible');
    arrowGroupControls.start({
      y: 13,
      transition: {
        duration: 0.5,
        transition: { type: 'spring', stiffness: 100 },
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 400));
    arrowGroupControls.start('hidden');
    svgControls.start({ opacity: 0, transition: { duration: 1 } });

    await shapeControls.start('hidden');
    await footprintControls.start('hidden');

    // Wait 500ms before firing the sequence again
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Fire the sequence again
    setSequenceInitiator(!sequenceInitiator);
  };

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        width="72"
        height="72"
        animate={svgControls}
        initial={{ opacity: 0 }}
      >
        <motion.g transform={'matrix(1,0,0,1,36,36)'} className="mouse-shape">
          <motion.path
            variants={shapeVariants}
            animate={shapeControls}
            initial="hidden"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth={2}
            fillOpacity={0}
            d={
              ' M18.323999404907227,4.427999973297119 C18.323999404907227,4.427999973297119 18.28700065612793,14.213000297546387 18.28700065612793,14.213000297546387 C18.28700065612793,24.312999725341797 10.100000381469727,32.5 0,32.5 C0,32.5 0,32.5 0,32.5 C-10.100000381469727,32.5 -18.28700065612793,24.312999725341797 -18.28700065612793,14.213000297546387 C-18.28700065612793,14.213000297546387 -18.28700065612793,-14.213000297546387 -18.28700065612793,-14.213000297546387 C-18.28700065612793,-24.312999725341797 -10.100000381469727,-32.5 0,-32.5 C0,-32.5 0,-32.5 0,-32.5 C10.100000381469727,-32.5 18.28700065612793,-24.312999725341797 18.28700065612793,-14.213000297546387 C18.28700065612793,-14.213000297546387 18.28700065612793,7.375999927520752 18.28700065612793,7.375999927520752'
            }
          />
        </motion.g>

        <motion.g className="footprint">
          <motion.path
            variants={footprintVariants}
            animate={footprintControls}
            initial="hidden"
            style={{ strokeDashoffset: 1 }}
            stroke="#f05b16"
            fill="none"
            strokeWidth="2"
            d={
              'M35.5 4C35.5 8 32.1667 12 30.5 13.5C29.5 14.5 27.8 17.2 29 20C30.5 23.5 35.5 22.5 35.5 29C35.5 34.2 36 38.6667 36 40'
            }
          />
        </motion.g>

        <motion.g
          variants={arrowGroupVariants}
          animate={arrowGroupControls}
          initial="hidden"
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={arrowElementControls}
            transition={{
              duration: 0.4,
            }}
            stroke="#f05b16"
            fill="none"
            strokeWidth="2"
            d={
              'M35.894 39.6507C36.003 40.9857 36.065 42.4567 36.065 44.0827L36.006 53.2967'
            }
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={arrowElementControls}
            transition={{
              duration: 0.4,
            }}
            stroke="#f05b16"
            strokeWidth="2"
            fill="none"
            d={'M29.548 47.9237L35.957 54.4177L42.452 47.9237'}
          />
        </motion.g>
      </motion.svg>
    </>
  );
};

export default ScrollDown;
