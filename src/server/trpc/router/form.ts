import { TRPCError } from '@trpc/server';
import { contactFormValidation } from '../../../components/forms/ContactForm';
import { transporter } from '../../mailer/mailer';
import { router, publicProcedure } from '../trpc';
// @ts-ignore
import recaptcha from 'recaptcha2';

const validateRecaptcha = async (token: string) => {
  const recaptchaClient = new recaptcha({
    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    secretKey: process.env.RECAPTCHA_SECRET_KEY,
  });

  return recaptchaClient
    .validate(token)
    .then((valid: any) => {
      return valid;
    })
    .catch((error: any) => {
      return false;
    });
};

export const formRouter = router({
  send: publicProcedure
    .input(contactFormValidation)
    .mutation(async ({ input }) => {
      const captchaValid = await validateRecaptcha(input.captcha);
      if (!captchaValid) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid reCAPTCHA token',
          cause: 'captcha',
        });
      }

      const mailInfo = await transporter.sendMail({
        from: `"${input.name}" <${input.email}>`,
        to: 'me@kkowalczyk.dev',
        subject: 'Contact Form - kkowalczyk.dev',
        text: input.message,
      });
      console.log('Message sent: %s', mailInfo.messageId);

      return {
        sent: true,
      };
    }),
});
