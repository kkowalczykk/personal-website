import { z } from 'zod';
import { contactFormValidation } from '../../../components/forms/ContactForm';
import { router, publicProcedure } from '../trpc';

export const formRouter = router({
  send: publicProcedure
    .input(contactFormValidation)
    .mutation(async ({ input }) => {
      return {
        data: input,
      };
    }),
});
