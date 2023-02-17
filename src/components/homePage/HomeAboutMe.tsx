import Image from 'next/image';
import { Jobs } from '../jobs/Jobs';
import { Section } from '../section/Section';
import homeStyles from './Home.module.css';
import { motion, Variants } from 'framer-motion';

export const HomeAboutMe: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const calculateAge = (birthDateString: Date) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    const yearsDifference = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      return yearsDifference - 1;
    }

    return yearsDifference;
  };
  const variants: Variants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
        damping: 20,
      },
    },
  };
  return (
    <Section heading="About me" sectionIndex={'01'}>
      <div>
        <div className="flex flex-col items-center max-lg:space-y-10 lg:flex-row lg:space-x-20">
          <div className="TextWrapper space-y-4 text-justify leading-relaxed text-slate-300 lg:text-left">
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
              you have a project that I can help with, don&apos;t hesitate to{' '}
              <a
                href="#contact"
                className="font-bold text-orange-primary transition-all duration-200 hover:underline"
              >
                contact me
              </a>
              !
            </p>
          </div>
          <div className="ImageWrapper relative max-w-full lg:max-[1200px]:-translate-x-6">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-md border-2 border-orange-primary xl:translate-x-5 xl:translate-y-5"></div>
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-md border-2 border-orange-primary opacity-30 xl:translate-x-10 xl:translate-y-10"></div>
            <div className="relative z-10 w-72 max-w-full rounded-md bg-orange-primary/70 transition-colors duration-300 hover:bg-transparent max-sm:aspect-square sm:h-[318px] sm:w-[300px]">
              <div
                className={`${homeStyles.ImageColorProvider} overflow-hidden rounded-md`}
              >
                <Image
                  src={'/kkowalczyk.jpg'}
                  sizes="(max-width: 640px) 318px, (max-width: 1024px) 318px, 318px"
                  alt="Karol Kowalczyk - headshot"
                  fill={true}
                  className="z-10 object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: '-125px 0px' }}
        className="ProfessionalExperience mt-20 text-left lg:px-10"
      >
        <h4 className="text-2xl font-bold text-slate-200 underline decoration-orange-primary">
          Professional experience
        </h4>

        <Jobs />
      </motion.div>
    </Section>
  );
};
