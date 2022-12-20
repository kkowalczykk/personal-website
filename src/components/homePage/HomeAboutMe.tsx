import { SectionHeading } from '../sectionHeading/SectionHeading';

export interface IHomeAboutMe extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeAboutMe: React.FC<IHomeAboutMe> = ({ children }) => {
  return (
    <section className="my-20 h-screen w-full py-20" id="about-me">
      <SectionHeading title="About me" sectionIndex={1}></SectionHeading>
    </section>
  );
};
