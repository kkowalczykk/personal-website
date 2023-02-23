import { Section } from '../section/Section';
import {
  lazy,
  Ref,
  RefObject,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';
import LocationObserver from '../locationObserver/LocationObserver';
import ContactFormLoader from '../forms/ContactFormLoader';

const ContactForm = lazy(() => import('../forms/ContactForm'));
export const HomeContact: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
  const ContactFormLoaderInitiator = useRef<HTMLDivElement>(null);
  const [isCFLoaderIntersecting, setIsCFLoaderIntersecting] = useState(false);

  return (
    <Section
      heading="Stay in touch"
      sectionIndex="04"
      id="contact"
      className="bg-dark-secondary py-20"
      centeredHeading={true}
    >
      <div className="mt-10 space-y-3 text-center text-slate-300 sm:mt-20">
        <p className="text-lg sm:text-xl">
          Have a question or a project you need help with? I&apos;d love to hear
          from you!
        </p>
        <p className="text-lg sm:text-xl">
          I am open for new opportunities and I am always looking for new
          projects to work on.
        </p>
        <p className="text-lg sm:text-xl">
          Feel free to send me an email at{' '}
          <a
            href="mailto:me@kkowalczyk.dev"
            className="text-orange-primary hover:underline"
          >
            me@kkowalczyk.dev
          </a>{' '}
          or fill out the form below 👇.
        </p>
      </div>
      <div
        ref={ContactFormLoaderInitiator}
        className="contactFormLoadInitiator mx-auto mt-10 w-full max-w-[500px] sm:mt-20"
      >
        <LocationObserver>
          <Suspense fallback={<ContactFormLoader />}>
            <ContactForm />
          </Suspense>
        </LocationObserver>
      </div>
    </Section>
  );
};
