import { Section } from '../section/Section';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MdArrowRight } from 'react-icons/md';

export const HomeExpertise: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section heading="My expertise" sectionIndex={'02'}>
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: '-85px 0px' }}
        className="Tiles grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3"
      >
        <HomeExpertiseTile
          title="Creating user interfaces"
          image="/frontend.png"
        >
          <p>
            Passionate about creating beautiful and functional user interfaces.
            For creating frontend I use React, Next.js, Vue, Nuxt, TailwindCSS,
            Framer Motion, and other modern technologies.
          </p>
        </HomeExpertiseTile>
        <HomeExpertiseTile
          title="Developing server-side applications"
          image="/backend.png"
        >
          <p>
            I have experience in developing server side applications using Node,
            Express, PHP, Laravel. I am also familar with relational and
            non-relational databases such as MySQL, MongoDB, and PostgreSQL.
          </p>
        </HomeExpertiseTile>
        <HomeExpertiseTile
          title="Content management systems and e-commerce"
          image="/cms.png"
          imageSize="large"
        >
          <p>
            I built many websites using different content management systems
            (mostly Wordpress) and e-commerce platforms (Woocommerce,
            Prestashop). I am also familiar with headless approaches (e.g. using
            Strapi as a CMS).
          </p>
        </HomeExpertiseTile>
      </motion.div>
      <div className="Technologies">
        <h3 className="mt-16 text-2xl font-semibold text-slate-200">
          Some of the{' '}
          <span className="relative after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-orange-primary/70">
            tools
          </span>{' '}
          <span className="text-orange-primary">&</span>{' '}
          <span className="relative after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-orange-primary/70">
            technologies
          </span>{' '}
          I&apos;ve worked with:
        </h3>
        <div className="mt-10 grid grid-cols-2 text-slate-300 sm:grid-cols-4">
          <div className="col-1">
            <ul className="list-none space-y-1 text-left text-base">
              <HomeExpertiseListItem>HTML / CSS / JS</HomeExpertiseListItem>
              <HomeExpertiseListItem>Vue</HomeExpertiseListItem>
              <HomeExpertiseListItem>Nuxt</HomeExpertiseListItem>
              <HomeExpertiseListItem>React</HomeExpertiseListItem>
              <HomeExpertiseListItem>Next.js</HomeExpertiseListItem>
            </ul>
          </div>
          <div className="col-2">
            <ul className="list-none space-y-1 text-left text-base">
              <HomeExpertiseListItem>Typescript</HomeExpertiseListItem>
              <HomeExpertiseListItem>Node.js</HomeExpertiseListItem>
              <HomeExpertiseListItem>Express</HomeExpertiseListItem>
              <HomeExpertiseListItem>PHP</HomeExpertiseListItem>
              <HomeExpertiseListItem>Laravel</HomeExpertiseListItem>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-none space-y-1 text-left text-base">
              <HomeExpertiseListItem>TailwindCSS</HomeExpertiseListItem>
              <HomeExpertiseListItem>Wordpress</HomeExpertiseListItem>
              <HomeExpertiseListItem>Prestashop</HomeExpertiseListItem>
              <HomeExpertiseListItem>Kafka</HomeExpertiseListItem>
              <HomeExpertiseListItem>NGINX / Apache</HomeExpertiseListItem>
            </ul>
          </div>
          <div className="col-4">
            <ul className="list-none space-y-1 text-left text-base">
              <HomeExpertiseListItem>Vite / Webpack</HomeExpertiseListItem>
              <HomeExpertiseListItem>Docker</HomeExpertiseListItem>
              <HomeExpertiseListItem>Photoshop</HomeExpertiseListItem>
              <HomeExpertiseListItem>Figma / XD</HomeExpertiseListItem>
              <HomeExpertiseListItem>GIT</HomeExpertiseListItem>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

const HomeExpertiseListItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <li>
      <MdArrowRight className="mr-3 inline text-2xl text-orange-primary" />
      {children}
    </li>
  );
};

interface IHomeExpertiseTile extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  alt?: string;
  title: string;
  imageSize?: 'normal' | 'large';
}

const HomeExpertiseTile: React.FC<IHomeExpertiseTile> = ({
  children,
  image,
  alt,
  title,
  imageSize = 'normal',
}) => {
  const imageWidthClass = imageSize === 'large' ? 'w-24' : 'w-16';

  const variants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.5, type: 'spring' }}
      className="Tile borded max-w-sm rounded-lg border-gray-900 bg-dark-secondary/60 py-4 px-4"
    >
      <div className="Tile__heading flex items-center space-x-3 text-left">
        <div className={`image relative h-16 ${imageWidthClass}`}>
          <Image
            fill={true}
            src={image}
            sizes="(max-width: 640px) 64px, 64px"
            alt={`${alt}`}
            className="object-contain"
          />
        </div>
        <h4 className="text-xl font-semibold text-slate-200">{title}</h4>
      </div>
      <div className="Tile__content mt-4 flex w-full flex-col items-start">
        <span className="font-mono text-orange-primary">{'<>'}</span>
        <div className="my-3 ml-2 border-l-2 border-orange-primary/40 px-3 pl-6 text-justify text-base text-slate-300">
          {children}
        </div>
        <span className="font-mono text-orange-primary">{'</>'}</span>
      </div>
    </motion.div>
  );
};
