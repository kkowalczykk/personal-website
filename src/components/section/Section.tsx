import Container from '../container/Container';
import { SectionHeading } from './SectionHeading';

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
  return (
    <section
      className={`mt-10 w-full pt-10 sm:mt-20 sm:pt-20 ${
        className ? className : ''
      }`}
      id={htmlId}
    >
      <Container>
        <div className="innerContainer w-full xl:px-14">
          <SectionHeading
            title={heading}
            sectionIndex={sectionIndex}
            centered={centeredHeading}
          />
          <div className="section-content mt-10 text-base font-light lg:text-lg">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
};
