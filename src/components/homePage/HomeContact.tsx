import { ContactForm } from '../forms/ContactForm';
import { Section } from '../section/Section';

export interface IHomeContact extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeContact: React.FC<IHomeContact> = ({ children }) => {
  return (
    <Section
      heading="Stay in touch"
      sectionIndex="04"
      id="contact"
      className="bg-dark-secondary py-20"
      centeredHeading={true}
    >
      <div className="mt-20 space-y-3 text-center text-slate-300">
        <p className="text-xl">
          Have a question or a project you need help with? I'd love to hear from
          you!
        </p>
        <p className="text-xl">
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
      <div className="mx-auto mt-20 w-full max-w-[500px]">
        <ContactForm />
      </div>
    </Section>
  );
};
