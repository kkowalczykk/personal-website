import { Projects } from '../projects/Projects';
import { Section } from '../section/Section';

export interface IHomeProjects extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeProjects: React.FC<IHomeProjects> = ({ children }) => {
  return (
    <Section heading="Projects" sectionIndex="03">
      <Projects />
    </Section>
  );
};
