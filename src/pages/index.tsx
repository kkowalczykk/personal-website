import Head from 'next/head';
import Image from 'next/image';
import { BgGridlines } from '../components/backgrounds/Gridlines';
import { BgShapes } from '../components/backgrounds/Shapes';
import Container from '../components/container/Container';
import { HomeAboutMe } from '../components/homePage/HomeAboutMe';
import { HomeHeader } from '../components/homePage/HomeHeader';
import MainLayout from '../components/layouts/MainLayout';
import ScrollDown from '../components/scrollDown/ScrollDown';
import { trpc } from '../utils/trpc';
import useViewportSize from '../utils/useViewportSize';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  // const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });
  const { width, height } = useViewportSize();
  return (
    <>
      <Head>
        <title>Homepage - kkowalczyk.dev</title>
        <meta name="description" content="Portfolio page kkowalczyk.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex w-full flex-1 flex-col items-center justify-center text-center">
        <HomeHeader />
        <HomeAboutMe />
      </main>
      {/* {width >= 1024 && <BgShapes />} */}
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
