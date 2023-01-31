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
      <div className="JobBox__main flex w-full items-center rounded-md bg-dark-secondary py-4 px-6">
        <div className="JobBox__main__content flex flex-1 items-center text-slate-200">
          <h5 className="inline-flex flex-1 items-center text-xl">
            <span className="font-bold">{jobName}</span>
            <span className="mx-1 font-sans font-medium text-orange-primary">
              @
            </span>{' '}
            <a
              href={jobCompany.url}
              target="_blank"
              className="text-orange-primary  hover:underline"
            >
              {jobCompany.name}
            </a>
          </h5>
          <span className="font-mono text-sm">
            {getStringInterval(jobStartDate, jobEndDate)}
          </span>
        </div>
        <button
          onClick={toggleAccordion}
          className="JobBox__main__button ml-4 block rounded-full border border-orange-primary p-3 text-xl transition-all hover:bg-orange-primary/20"
        >
          {isExpanded ? <MdRemove /> : <MdAdd />}
        </button>
      </div>
      <div
        ref={accordion}
        className="JobBox__accordion mt-2 flex w-full flex-col overflow-hidden rounded-md bg-dark-secondary/50 px-6 shadow-sm transition-all duration-500"
      >
        <div
          ref={accordionContent}
          className="JobBox__accordion__content py-4 text-slate-300"
        >
          <div className="w-full flex-col justify-center">{jobDescription}</div>
          <div className="mt-4 flex flex-wrap space-x-3">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="rounded-full bg-orange-primary/90 px-4 py-1 font-mono text-sm font-semibold text-dark-primary"
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
