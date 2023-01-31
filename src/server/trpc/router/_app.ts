import { router } from '../trpc';
import { exampleRouter } from './example';
import { formRouter } from './form';

export const appRouter = router({
  example: exampleRouter,
  form: formRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
