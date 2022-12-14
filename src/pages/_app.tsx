import { AppProps, type AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

// @ts-ignore
export default trpc.withTRPC(MyApp);
