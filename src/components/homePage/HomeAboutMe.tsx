import Image from 'next/image';
import { MdAdd, MdArrowRight, MdLocationPin } from 'react-icons/md';
import { Jobs } from '../jobs/Jobs';
import { Section } from '../section/Section';
import { SectionHeading } from '../section/SectionHeading';
import homeStyles from './Home.module.css';

export interface IHomeAboutMe extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeAboutMe: React.FC<IHomeAboutMe> = ({ children }) => {
  const calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <Section heading="About me" sectionIndex={'01'}>
      <div>
        <div className="flex items-center space-x-20">
          <div className="TextWrapper space-y-4 text-left leading-relaxed text-slate-300">
            <p>
              Hi, I am Karol Kowalczyk, a web developer from Poland. I am
              currently working as a freelancer and looking for new
              opportunities. I am {calculateAge(new Date('8,17,1997'))} years
              old and live in Warsaw.
            </p>
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
                className="font-bold text-orange-primary transition-all duration-200 hover:underline"
              >
                contact me
              </a>
              !
            </p>
          </div>
          <div className="ImageWrapper relative">
            <div className="absolute inset-0 -z-10 translate-x-5 translate-y-5 rounded-md border-2 border-orange-primary"></div>
            <div className="absolute inset-0 translate-x-10 translate-y-10 rounded-md border-2 border-orange-primary opacity-30"></div>
            <div className="relative z-10 h-[318px] w-[300px] rounded-md bg-orange-primary/70 transition-colors duration-300 hover:bg-transparent">
              <div
                className={`${homeStyles.ImageColorProvider} overflow-hidden rounded-md`}
              >
                <Image
                  src={'/kkowalczyk.jpg'}
                  alt="Karol Kowalczyk - headshot"
                  fill={true}
                  className="z-10"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfessionalExperience mt-20 px-10 text-left">
        <h4 className="text-2xl font-bold text-slate-200 underline decoration-orange-primary">
          Professional experience
        </h4>

        <Jobs />

        {/* <div className="Jobs mt-5 space-y-6">
          <div className="JobBox flex flex-col">
            <div className="JobBox__main flex w-full items-center rounded-md bg-dark-secondary py-4 px-6">
              <div className="JobBox__main__content flex flex-1">
                <h5 className="inline-flex flex-1 text-xl">
                  <span className="font-bold">Web Developer </span>
                  <span className="mx-1 font-sans font-medium text-orange-primary">
                    @
                  </span>{' '}
                  <a
                    href="https://resultmedia.pl"
                    target="_blank"
                    className="text-orange-primary  hover:underline"
                  >
                    ResultMedia
                  </a>
                </h5>
                <span className="">November 2020 - November 2022</span>
              </div>
              <button className="JobBox__main__button ml-4 block rounded-full border border-orange-primary p-3 text-xl transition-all hover:bg-orange-primary/20">
                <MdAdd />
              </button>
            </div>
            <div className="JobBox__accordion mt-2 flex w-full flex-col justify-center rounded-md bg-dark-secondary/50 py-4 px-6">
              <span className="JobBox__accordion__location inline-flex items-center font-bold">
                <span className="mr-2 text-xl text-orange-primary">
                  <MdLocationPin />
                </span>
                Warsaw, PL
              </span>
              <div className="JobBox__accordion__desc mt-4">
                <ul className="list-none space-y-3 text-base">
                  <li>
                    <MdArrowRight className="mr-3 inline text-2xl text-orange-primary" />
                    Creating user interfaces based on provided designs and
                    wireframes.
                  </li>
                  <li>
                    <MdArrowRight className="mr-3 inline text-2xl text-orange-primary" />
                    Working with different technologies and content management
                    systems such as Vue, Nuxt, WordPress, Joomla, Prestashop,
                    Express.js etc.
                  </li>
                  <li>
                    <MdArrowRight className="mr-3 inline text-2xl text-orange-primary" />
                    Creating and maintaining websites and web applications.
                  </li>
                  <li>
                    <MdArrowRight className="mr-3 inline text-2xl text-orange-primary" />
                    Performance optimization and accessibility improvements of
                    existing websites (SEO and Web Vitals).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Section>
  );
};
