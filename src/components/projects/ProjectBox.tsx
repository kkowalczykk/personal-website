import Image from 'next/image';
import styles from './Projects.module.css';
import { FiExternalLink } from 'react-icons/fi';

export interface IProjectBox extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string | React.ReactNode;
  imagePath: string;
  imageAlt: string;
  externalLink?: string;
  technologies: string[];
  reversed?: boolean;
}

export const ProjectBox: React.FC<IProjectBox> = ({
  name,
  description,
  imagePath,
  imageAlt,
  externalLink,
  technologies,
  reversed,
}) => {
  return (
    <div
      className={`ProjectBox flex max-md:flex-col-reverse ${
        reversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="ProjectBox__ImageWrapper relative z-0 mt-10 max-md:aspect-video max-md:w-full md:mt-12 md:h-[310px] md:flex-1">
        <div
          className={`ImageContainer absolute top-0 h-full w-full overflow-hidden rounded-md bg-orange-primary/70 shadow-md transition-all hover:bg-transparent md:w-[112%] ${
            reversed ? 'right-0' : 'left-0'
          }`}
        >
          <div
            className={`${styles.ImageColorProvider} relative h-full w-full`}
          >
            <Image
              fill={true}
              src={imagePath}
              alt={imageAlt}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className={`ProjectBox__ContentWrapper z-10 flex flex-1 flex-col ${
          reversed ? 'text-left' : 'text-right'
        }`}
      >
        <span className="font-marker text-sm leading-none text-orange-primary">
          PROJECT
        </span>
        <h3 className="ProjectBox__Name text-3xl font-bold text-slate-100">
          {name}
        </h3>
        <div className="ProjectBox__Description my-6 rounded-md bg-dark-secondary p-4 text-slate-200 shadow-lg">
          {description}
        </div>
        <div
          className={`ProjectBox__Technologies inline-flex flex-wrap text-slate-300 ${
            reversed ? '' : 'justify-end'
          }`}
        >
          {technologies.map((technology, index) => (
            <span
              key={index}
              className={`ProjectBox__Technology mb-2 whitespace-nowrap text-base ${
                reversed ? 'mr-5 last:mr-0' : 'ml-5 first:ml-0'
              }`}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="ProjectBox__buttons mt-3">
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <FiExternalLink className="mr-2 inline-block text-2xl transition-colors hover:text-orange-primary" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
