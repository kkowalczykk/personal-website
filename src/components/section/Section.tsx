import Container from '../container/Container';
import { SectionHeading } from './SectionHeading';

export interface ISection {
  heading: string;
  sectionIndex: string;
  children: React.ReactNode;
  id?: string;
}

export const Section: React.FC<ISection> = ({
  heading,
  sectionIndex,
  children,
  id,
}) => {
  const htmlId = id ? id : heading.toLowerCase().replace(' ', '-');
  return (
    <section className="my-20 w-full py-20" id={htmlId}>
      <Container>
        <div className="innerContainer w-full xl:px-14">
          <SectionHeading title={heading} sectionIndex={sectionIndex} />
          <div className="section-content mt-10 text-lg font-light">

          {children}
          </div>
        </div>
      </Container>
    </section>
  );
};
