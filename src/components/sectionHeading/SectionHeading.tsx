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
      y: -20,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.5,
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
            viewport={{ once: true, amount: 1 }}
          >
            {'#'}
            {sectionIndex}
          </motion.div>
        )}
        <h2 className="text-5xl font-bold text-teal-primary">{title}</h2>
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-marker text-9xl text-white opacity-[0.02]">
          {title}
        </span>
      </Container>
    </div>
  );
};
