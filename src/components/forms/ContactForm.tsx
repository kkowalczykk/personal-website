import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { BiLoader } from 'react-icons/bi';
import { createPortal } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

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
  const [captcha, setCaptcha] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const layoutBodyRef = useRef<Element | null>(null);

  useEffect(() => {
    layoutBodyRef.current = document.querySelector('#__next > div');
  }, []);

  const sendMutation = trpc.form.send.useMutation({
    onSuccess: () => {
      resetErrors();
      resetFormInputs();
      toast.success('Message sent successfully!', {
        position: 'bottom-right',
        duration: 5000,
        style: {
          width: '300px',
        },
      });
    },
    onError: (error) => {
      console.log(error.message);
      let message = 'Something went wrong. Please try again later.';
      if (error.message === 'Invalid reCAPTCHA token') {
        message = 'Invalid reCAPTCHA token. Please try again.';
        setCaptcha('');
        // @ts-ignore
        window?.grecaptcha?.reset();
      }
      toast.error(message, {
        position: 'bottom-right',
        duration: 5000,
        style: {
          width: '300px',
        },
      });
    },
  });

  const resetErrors = () => {
    setNameError(null);
    setEmailError(null);
    setMessageError(null);
    setCaptchaError(null);
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
      captcha,
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
            case 'captcha':
              setCaptchaError('Please verify that you are not a robot.');
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
    if (!validateForm()) return;

    setIsSending(true);
    sendMutation
      .mutateAsync({
        name,
        email,
        message,
        captcha,
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptcha(value);
    } else {
      setCaptcha('');
    }
  };

  return (
    <form className="ContactForm" onSubmit={handleSubmit} id="contact-form">
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
            className="ContactForm__Input rounded-md border border-slate-200 bg-dark-primary p-2 outline-none ring-opacity-0 transition-all duration-200 focus:border-orange-primary focus:ring-4 focus:ring-orange-primary focus:ring-opacity-50"
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
            className="ContactForm__Input rounded-md border border-slate-200 bg-dark-primary p-2 outline-none ring-opacity-0 transition-all duration-200 focus:border-orange-primary focus:ring-4 focus:ring-orange-primary focus:ring-opacity-50"
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
            className="ContactForm__Input rounded-md border border-slate-200 bg-dark-primary p-2 outline-none ring-opacity-0 transition-all duration-200 focus:border-orange-primary focus:ring-4 focus:ring-orange-primary focus:ring-opacity-50"
          />
          <ContactFormInputErrorMessage errorMsg={messageError} />
        </ContactFormInputContainer>
        <ContactFormInputContainer>
          <div className="flex justify-center pt-4">
            <ReCAPTCHA
              sitekey="6Lcx1z4kAAAAAAw2UkTqf6F2mWgeT1IMGTabE4IA"
              onChange={handleCaptchaChange}
              theme="dark"
            />
            <ContactFormInputErrorMessage errorMsg={captchaError} />
          </div>
        </ContactFormInputContainer>
        <div>
          <button
            type="submit"
            className="mt-10 flex w-44 items-center justify-center rounded-md border-2 border-orange-primary py-2 px-5 text-center font-marker text-xl text-slate-200 transition-all hover:bg-orange-primary/20"
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
        createPortal(<Toaster />, layoutBodyRef.current)}
    </form>
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
      className="ContactForm__Label mb-2 font-marker text-xl text-slate-200"
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
