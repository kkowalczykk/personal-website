import { ReactNode, use, useEffect, useRef, useState } from 'react';
import { MdAdd, MdArrowRight, MdLocationPin, MdRemove } from 'react-icons/md';
import { ITechnology } from '../../types';

export interface IJobBox extends React.HTMLAttributes<HTMLDivElement> {
  jobName: string;
  jobCompany: {
    name: string;
    url: string;
  };
  jobStartDate: Date;
  jobEndDate: Date;
  jobDescription: string | React.ReactNode;
  technologies: ITechnology[];
  expanded?: boolean;
}

export const JobBox: React.FC<IJobBox> = ({
  jobName,
  jobCompany,
  jobStartDate,
  jobEndDate,
  jobDescription,
  technologies,
  expanded = false,
}) => {
  const accordion = useRef<HTMLDivElement>(null);
  const accordionContent = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

  const getStringInterval = (startDate: Date, endDate: Date) => {
    return `${startDate.toLocaleString('en-us', {
      month: 'long',
      year: 'numeric',
    })} - ${endDate.toLocaleString('en-us', {
      month: 'long',
      year: 'numeric',
    })}`;
  };

  const recalculateAccordionHeight = () => {
    if (!isExpanded) return;
    const accordionContentHeight = accordionContent.current?.clientHeight;

    if (accordion.current) {
      accordion.current.style.height = `${accordionContentHeight}px`;
    }
  };

  useEffect(() => {
    recalculateAccordionHeight();

    window.addEventListener('resize', () => {
      recalculateAccordionHeight();
    });
  }, []);

  useEffect(() => {
    if (isExpanded) {
      recalculateAccordionHeight();
    } else {
      if (accordion.current) {
        accordion.current.style.height = '0px';
      }
    }
  }, [isExpanded]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="JobBox flex flex-col">
      <div className="JobBox__main flex w-full items-center rounded-md bg-dark-secondary py-4 px-4 lg:px-6">
        <div className="JobBox__main__content flex flex-1 flex-col text-slate-200 lg:flex-row lg:items-center">
          <h5 className="min-lg:text-xl inline flex-1 items-center">
            <span className="font-bold">{jobName}</span>{' '}
            <div className="inline whitespace-nowrap">
              <span className="font-sans font-medium text-orange-primary">
                @
              </span>{' '}
              <a
                href={jobCompany.url}
                target="_blank"
                className="text-orange-primary  hover:underline"
              >
                {jobCompany.name}
              </a>
            </div>
          </h5>
          <span className="font-mono text-sm">
            {getStringInterval(jobStartDate, jobEndDate)}
          </span>
        </div>
        <button
          onClick={toggleAccordion}
          className="JobBox__main__button ml-4 block rounded-full border border-orange-primary p-2 text-xl transition-all hover:bg-orange-primary/20 sm:p-3"
        >
          {isExpanded ? <MdRemove /> : <MdAdd />}
        </button>
      </div>
      <div
        ref={accordion}
        className="JobBox__accordion mt-2 flex w-full flex-col overflow-hidden rounded-md bg-dark-secondary/50 px-4 shadow-sm transition-all duration-500 sm:px-6"
      >
        <div
          ref={accordionContent}
          className="JobBox__accordion__content py-4 text-slate-300"
        >
          <div className="w-full flex-col justify-center max-sm:text-base">
            {jobDescription}
          </div>
          <div className="mt-4 flex flex-wrap">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="mr-3 mb-3 rounded-full bg-orange-primary/90 px-3 py-[0.18em] font-mono text-xs font-semibold text-dark-primary last:mr-0 sm:px-4 sm:py-1 sm:text-sm"
              >
                {technology.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
