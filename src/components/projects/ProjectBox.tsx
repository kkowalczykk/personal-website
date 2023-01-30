import Image from 'next/image';
import styles from './Projects.module.css';

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
    <div className={`ProjectBox flex ${reversed ? 'flex-row-reverse' : ''}`}>
      <div className="ProjectBox__ImageWrapper relative z-0 h-[310px] flex-1">
        <div
          className={`ImageContainer bg-orange-primary/70 absolute top-0 h-full w-[112%] overflow-hidden rounded-md shadow-md transition-all hover:bg-transparent ${
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
        <span className="text-orange-primary font-marker text-sm leading-3">
          PROJECT
        </span>
        <h3 className="ProjectBox__Name text-3xl font-bold">{name}</h3>
        <div className="ProjectBox__Description my-6 rounded-md bg-dark-secondary p-4">
          {description}
        </div>
        <div
          className={`ProjectBox__Technologies inline-flex flex-wrap text-gray-300 ${
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
      </div>
    </div>
  );
};
