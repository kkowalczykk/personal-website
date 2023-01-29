import { MdArrowRight, MdLocationPin } from 'react-icons/md';
import { ITechnology } from '../../types';
import { JobBox } from './JobBox';

export interface IJobs extends React.HTMLAttributes<HTMLDivElement> {}

export interface IJob {
  jobName: string;
  jobCompany: {
    name: string;
    url: string;
  };
  jobStartDate: Date;
  jobEndDate: Date;
  jobDescription: string | React.ReactNode;
  technologies: ITechnology[];
}

export const Jobs: React.FC<IJobs> = ({ className }) => {
  const jobs: IJob[] = [
    {
      jobName: 'Web Developer',
      jobCompany: {
        name: 'ResultMedia',
        url: 'https://resultmedia.pl',
      },
      jobStartDate: new Date('2020-11-01'),
      jobEndDate: new Date('2022-11-01'),
      jobDescription: (
        <>
          <span className="JobBox__accordion__location inline-flex items-center font-bold">
            <span className="mr-2 text-xl text-teal-primary">
              <MdLocationPin />
            </span>
            Warsaw, PL
          </span>
          <div className="JobBox__accordion__desc mt-4">
            <ul className="list-none space-y-3 text-base">
              <li>
                <MdArrowRight className="mr-3 inline text-2xl text-teal-primary" />
                Creating user interfaces based on provided designs and
                wireframes.
              </li>
              <li>
                <MdArrowRight className="mr-3 inline text-2xl text-teal-primary" />
                Working with different technologies and content management
                systems such as Vue, Nuxt, WordPress, Joomla, Prestashop,
                Express.js etc.
              </li>
              <li>
                <MdArrowRight className="mr-3 inline text-2xl text-teal-primary" />
                Creating and maintaining websites and web applications.
              </li>
              <li>
                <MdArrowRight className="mr-3 inline text-2xl text-teal-primary" />
                Performance optimization and accessibility improvements of
                existing websites (SEO and Web Vitals).
              </li>
            </ul>
          </div>
        </>
      ),
      technologies: [
        {
          name: 'Vue',
        },
        {
          name: 'Nuxt',
        },
        {
          name: 'WordPress',
        },
        {
          name: 'PHP',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'TailwindCSS',
        },
        {
          name: 'Prestashop',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'Express',
        },
      ],
    },
  ];

  return (
    <div className={`Jobs mt-5 space-y-6 ${className}`}>
      {jobs.map((job, index) => (
        <JobBox
          key={index}
          jobName={job.jobName}
          jobCompany={job.jobCompany}
          jobStartDate={job.jobStartDate}
          jobEndDate={job.jobEndDate}
          jobDescription={job.jobDescription}
          technologies={job.technologies}
          expanded={index === 0}
        />
      ))}
    </div>
  );
};
