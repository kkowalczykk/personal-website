import Head from 'next/head';
import Image from 'next/image';
import { BgGridlines } from '../components/backgrounds/Gridlines';
import Container from '../components/container/Container';
import { HomeAboutMe } from '../components/homePage/HomeAboutMe';
import { HomeContact } from '../components/homePage/HomeContact';
import { HomeExpertise } from '../components/homePage/HomeExpertise';
import { HomeHeader } from '../components/homePage/HomeHeader';
import { HomeProjects } from '../components/homePage/HomeProjects';
import MainLayout from '../components/layouts/MainLayout';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="kkowalczyk.dev - Karol Kowalczyk" />
        <meta
          property="og:description"
          content="Karol Kowalczyk - Fullstack Developer - Portfolio"
        />
        <meta
          property="og:image"
          content="https://kkowalczyk.dev/kkowalczyk-og.jpg"
        />
        <meta property="og:url" content="https://kkowalczyk.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="kkowalczyk.dev" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <main className="relative flex w-full flex-1 flex-col items-center justify-center text-center">
        <HomeHeader />
        <HomeAboutMe />
        <HomeExpertise />
        <HomeProjects />
        <HomeContact />
        <footer className="w-full">
          <Container className="font-base bg-dark-primary py-4 text-sm">
            <p>Designed & built by Karol Kowalczyk. </p>
          </Container>
        </footer>
      </main>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
