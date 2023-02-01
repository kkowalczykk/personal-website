import { Variants } from 'framer-motion';
import Container from '../container/Container';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

export interface ISection extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  sectionIndex: string;
  children?: React.ReactNode;
  id?: string;
  centeredHeading?: boolean;
}

export const Section: React.FC<ISection> = ({
  heading,
  sectionIndex,
  children,
  id,
  className,
  centeredHeading = false,
}) => {
  const htmlId = id ? id : heading.toLowerCase().replace(' ', '-');
  const variants: Variants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
        damping: 20,
      },
    },
  };
  return (
    <motion.section
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: '-125px 0px' }}
      className={`mt-10 w-full pt-10 sm:mt-20 sm:pt-20 ${
        className ? className : ''
      }`}
      id={htmlId}
    >
      <Container>
        <motion.div
          variants={variants}
          className="innerContainer w-full xl:px-14"
        >
          <SectionHeading
            title={heading}
            sectionIndex={sectionIndex}
            centered={centeredHeading}
          />
          <div className="section-content mt-10 text-base font-light lg:text-lg">
            {children}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};
