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
  return (
    <div
      className={`SectionHeading relative flex w-full flex-wrap items-center text-left text-4xl font-bold ${
        centered ? 'justify-center' : ''
      }`}
    >
      {sectionIndex && (
        <>
          <span
            className={`text-stroke z-10 font-marker text-3xl text-orange-primary sm:text-5xl ${
              centered ? 'mb-2 block w-full text-center' : 'mr-6'
            }`}
          >
            {'#'}
            {sectionIndex}
          </span>
        </>
      )}
      {centered && (
        <div className="mr-5 h-[1px] max-w-[350px] flex-1 rounded-full bg-orange-primary max-[600px]:hidden"></div>
      )}
      <h2 className="font-bold text-slate-100">{title}</h2>
      <div className="ml-5 h-[1px] max-w-[350px] flex-1 rounded-full bg-orange-primary max-[600px]:hidden"></div>
    </div>
  );
};
