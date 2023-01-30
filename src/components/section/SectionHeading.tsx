import Container from '../container/Container';
import { motion, Variants } from 'framer-motion';

export interface ISectionHeading {
  title: React.ReactNode | string;
  sectionIndex?: string;
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
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1, margin: '-100px 0px' }}
      className="SectionHeading flex w-full items-center text-left text-4xl font-bold"
    >
      {sectionIndex && (
        <span className="z-10 mr-4 font-marker text-2xl text-orange-primary">
          {'#'}
          {sectionIndex}
        </span>
      )}
      <h2 className="font-bold text-white">{title}</h2>
      <div className="ml-5 h-[1px] max-w-[350px] flex-1 rounded-full bg-orange-primary"></div>
    </motion.div>
  );
};
