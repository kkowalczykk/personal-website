import Image from 'next/image';
import { Section } from '../section/Section';
import { SectionHeading } from '../section/SectionHeading';
import homeStyles from './Home.module.css';

export interface IHomeAboutMe extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeAboutMe: React.FC<IHomeAboutMe> = ({ children }) => {
  return (
    <Section heading="About me" sectionIndex={'01'}>
      <div>
        <div className="flex space-x-20">
          <div className="text-wrapper space-y-4 text-left leading-relaxed text-slate-300">
            <p>
              I am a full-stack developer with a passion for creating beautiful,
              responsive, and accessible websites and web applications. I have a
              strong background in web development and a passion for learning
              new technologies. I am a self-motivated, hard-working, and
              detail-oriented individual who is always looking for new
              challenges.
            </p>
            <p>
              I have started my journey with programming in 2018 as a self
              taught developer. Since then I have been working on various
              projects, both personal and commercial. During this time I have
              gained a lot of experience and knowledge that helps me to create
              solutions from scratch.
            </p>
            <p>
              I am always looking for new opportunities to learn and grow, so if
              you have a project that I can help with, don't hesitate to{' '}
              <a
                href="#contact"
                className="font-bold text-teal-primary transition-all duration-200 hover:underline"
              >
                contact me
              </a>
              !
            </p>
          </div>
          <div className="image-wrapper relative">
            <div className="relative z-10 h-[318px] w-[300px] rounded-xl bg-teal-primary/50 transition-colors duration-300 hover:bg-transparent">
              <div
                className={`${homeStyles.aboutImageColorProvider} overflow-hidden rounded-xl`}
              >
                <Image
                  src={'/kkowalczyk.jpg'}
                  alt="Karol Kowalczyk - headshot"
                  fill={true}
                ></Image>
              </div>
            </div>
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-xl border-2 border-teal-primary"></div>
            <div className="absolute inset-0 translate-x-10 translate-y-10 rounded-xl border-2 border-teal-primary opacity-30"></div>
          </div>
        </div>
      </div>
      <div className="professional-experience mt-16 text-left">
        <h4 className="text-2xl font-bold underline decoration-teal-primary">
          Professional experience
        </h4>
      </div>
    </Section>
  );
};
