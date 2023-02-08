import { AppProps, type AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

// @ts-ignore
export default trpc.withTRPC(MyApp);
