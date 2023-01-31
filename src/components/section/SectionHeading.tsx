import Container from '../container/Container';
import { motion, Variants } from 'framer-motion';

export interface ISectionHeading {
  title: React.ReactNode | string;
  sectionIndex?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<ISectionHeading> = ({
  title,
  sectionIndex,
  centered = false,
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
      className={`SectionHeading relative flex w-full flex-wrap items-center text-left text-4xl font-bold ${
        centered ? 'justify-center' : ''
      }`}
    >
      {sectionIndex && (
        <>
          <span
            className={`text-stroke z-10 font-marker text-5xl text-orange-primary ${
              centered ? 'mb-2 block w-full text-center' : 'mr-6'
            }`}
          >
            {'#'}
            {sectionIndex}
          </span>
        </>
      )}
      {centered && (
        <div className="mr-5 h-[1px] max-w-[350px] flex-1 rounded-full bg-orange-primary"></div>
      )}
      <h2 className="font-bold text-slate-100">{title}</h2>
      <div className="ml-5 h-[1px] max-w-[350px] flex-1 rounded-full bg-orange-primary"></div>
    </motion.div>
  );
};
