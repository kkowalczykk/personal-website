import { AppProps, type AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Head>
          <script
            defer
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                debug: false,
                forward: ['dataLayer.push', 'gtag'],
              };
            `,
            }}
          />
          <script
            defer
            type="text/partytown"
            src="https://www.googletagmanager.com/gtag/js?id=G-0SV8BTTHK2"
          />
          <script
            defer
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0SV8BTTHK2');
            `,
            }}
          />
        </Head>
      )}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

// @ts-ignore
export default trpc.withTRPC(MyApp);
