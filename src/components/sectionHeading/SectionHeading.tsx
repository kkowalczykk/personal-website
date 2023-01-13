import Container from '../container/Container';
import { motion, Variants } from 'framer-motion';

export interface ISectionHeading {
  title: React.ReactNode | string;
  sectionIndex?: number;
}

export const SectionHeading: React.FC<ISectionHeading> = ({
  title,
  sectionIndex,
}) => {
  const variants: Variants = {
    offscreen: {
      opacity: 0,
      y: -50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <div className="SectionHeading w-full">
      <Container className="relative flex flex-col items-center justify-center text-center">
        {sectionIndex && (
          <motion.div
            variants={variants}
            className="z-10 font-marker text-xl font-bold text-teal-primary"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1, margin: '-100px 0px' }}
          >
            {'#'}
            {sectionIndex}
          </motion.div>
        )}
        <motion.h2
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1, margin: '-100px 0px' }}
          className="text-5xl font-bold text-teal-primary"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: '-50%', y: '-50%' }}
          whileInView={{
            opacity: 0.02,
            scale: 1,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true, amount: 1, margin: '-100px 0px' }}
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 inline -translate-y-1/2 font-marker text-9xl text-white opacity-[0.02]"
        >
          {title}
        </motion.div>
      </Container>
    </div>
  );
};
