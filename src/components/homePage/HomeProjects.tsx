import { Projects } from '../projects/Projects';
import { Section } from '../section/Section';

export const HomeProjects: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
  return (
    <Section heading="Projects" sectionIndex="03">
      <Projects />
    </Section>
  );
};
