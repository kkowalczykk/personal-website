import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { BiLoader } from 'react-icons/bi';
import { createPortal } from 'react-dom';

export interface IContactForm extends React.HTMLAttributes<HTMLFormElement> {}

export const contactFormValidation = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  captcha: z.string().min(1).max(1000),
});

export const ContactForm: React.FC<IContactForm> = ({}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [formMessages, setFormMessages] = useState<ContactFormMessages[]>([
    {
      type: 'success',
      message: 'Message sent successfully!',
    },
    {
      type: 'error',
      message: 'Something went wrong. Please try again later.',
    },
  ]);
  const layoutBodyRef = useRef<Element | null>(null);

  useEffect(() => {
    layoutBodyRef.current = document.querySelector('#__next > div');
  }, []);

  const sendMutation = trpc.form.send.useMutation({
    onSuccess: () => {
      resetErrors();
      resetFormInputs();
      setFormMessages((prev) => [
        ...prev,
        {
          type: 'success',
          message: 'Message sent successfully!',
        },
      ]);
      setTimeout(() => {
        setFormMessages((prev) => prev.slice(1));
      }, 5000);
    },
    onError: (error) => {
      console.log(error);
      setFormMessages((prev) => [
        ...prev,
        {
          type: 'error',
          message: 'Something went wrong. Please try again later.',
        },
      ]);
      setTimeout(() => {
        setFormMessages((prev) => prev.slice(1));
      }, 5000);
    },
  });

  const resetErrors = () => {
    setNameError(null);
    setEmailError(null);
    setMessageError(null);
  };

  const resetFormInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validateForm = () => {
    resetErrors();
    const formData = contactFormValidation.safeParse({
      name,
      email,
      message,
      captcha: '123',
    });

    if (!formData.success) {
      if (formData.error.issues.length > 0) {
        formData.error.issues.forEach((issue) => {
          switch (issue.path[0]) {
            case 'name':
              setNameError(issue.message.replace('String', 'Name'));
              break;
            case 'email':
              setEmailError(issue.message);
              break;
            case 'message':
              setMessageError(issue.message.replace('String', 'Message'));
              break;
            default:
              break;
          }
        });
      }
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);

    if (!validateForm()) return;

    setIsSending(true);
    const result = await sendMutation.mutateAsync({
      name,
      email,
      message,
      captcha: '123',
    });
    setIsSending(false);
  };

  const handleErrors = (e: any) => {};

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center space-y-3">
        <ContactFormInputContainer>
          <ContactFormInputLabel htmlFor="name">
            Your Name
          </ContactFormInputLabel>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            name="name"
            id="name"
            className="ContactForm__Input rounded-md border border-white bg-dark-primary p-2 outline-none ring-opacity-0 transition-all duration-200 focus:border-orange-primary focus:ring-4 focus:ring-orange-primary focus:ring-opacity-50"
          />
          <ContactFormInputErrorMessage errorMsg={nameError} />
        </ContactFormInputContainer>
        <ContactFormInputContainer>
          <ContactFormInputLabel htmlFor="email">
            Your Email
          </ContactFormInputLabel>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            name="email"
            id="email"
            className="ContactForm__Input rounded-md border border-white bg-dark-primary p-2 outline-none ring-opacity-0 transition-all duration-200 focus:border-orange-primary focus:ring-4 focus:ring-orange-primary focus:ring-opacity-50"
          />
          <ContactFormInputErrorMessage errorMsg={emailError} />
        </ContactFormInputContainer>
        <ContactFormInputContainer>
          <ContactFormInputLabel htmlFor="message">
            Message
          </ContactFormInputLabel>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            name="message"
            id="message"
            rows={3}
            className="ContactForm__Input rounded-md border border-white bg-dark-primary p-2 outline-none ring-opacity-0 transition-all duration-200 focus:border-orange-primary focus:ring-4 focus:ring-orange-primary focus:ring-opacity-50"
          />
          <ContactFormInputErrorMessage errorMsg={messageError} />
        </ContactFormInputContainer>
        <div>
          <button
            type="submit"
            className="mt-10 flex w-44 items-center justify-center rounded-md border-2 border-orange-primary py-2 px-5 text-center font-marker text-xl transition-all hover:bg-orange-primary/20"
          >
            {isSending ? (
              <>
                Loading{' '}
                <BiLoader
                  className="ml-2 animate-spin"
                  style={{ animationDuration: '3000ms' }}
                ></BiLoader>
              </>
            ) : (
              <>Send</>
            )}
          </button>
        </div>
      </div>
      {layoutBodyRef.current &&
        createPortal(
          <ContactFormMessages messages={formMessages} />,
          layoutBodyRef.current
        )}
    </form>
  );
};

type ContactFormMessages = {
  message: string;
  type: 'success' | 'error';
};

interface IContactFormMessages {
  messages: ContactFormMessages[];
}

const ContactFormMessages: React.FC<IContactFormMessages> = ({ messages }) => {
  return (
    <div className="ContactForm__Messages fixed bottom-4 right-4 z-20 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`ContactForm__Message flex w-72 items-center rounded-md border-2 border-orange-primary bg-dark-primary py-2 px-5 text-left text-lg text-white transition-all ${
            message.type === 'success' ? '' : ''
          }`}
        >
          {message.message}
        </div>
      ))}
    </div>
  );
};

const ContactFormInputContainer: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children }) => {
  return (
    <div className="ContactForm__InputContainer relative flex w-full flex-col pb-4 text-left">
      {children}
    </div>
  );
};

interface IContactFormInputLabel
  extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

const ContactFormInputLabel: React.FC<IContactFormInputLabel> = ({
  htmlFor,
  children,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="ContactForm__Label mb-2 font-marker text-xl"
    >
      {children}
    </label>
  );
};

interface IContactFormInputErrorMessage
  extends React.HTMLAttributes<HTMLLabelElement> {
  errorMsg: string | null;
}

const ContactFormInputErrorMessage: React.FC<IContactFormInputErrorMessage> = ({
  children,
  errorMsg,
}) => {
  return (
    <>
      {errorMsg && (
        <span className="ContactForm__InputErrorMessage absolute -bottom-2 left-0 text-sm text-orange-primary">
          {errorMsg}
        </span>
      )}
    </>
  );
};
