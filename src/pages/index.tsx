import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/container/Container';
import MainLayout from '../components/layouts/MainLayout';
import ScrollDown from '../components/scrollDown/ScrollDown';
import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  // const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });
  return (
    <>
      <Head>
        <title>Homepage - kkowalczyk.dev</title>
        <meta name="description" content="Portfolio page kkowalczyk.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex w-full flex-1 flex-col items-center justify-center text-center ">
        <header className="z-10 flex min-h-screen w-full flex-col items-center justify-center pt-20">
          <Container className="flex flex-1 flex-col items-center justify-center">
            <div className="mb-2 inline-flex items-center text-lg font-bold">
              <span>Hi there </span>
              <div className="relative ml-2 inline-flex h-8 w-8">
                <Image
                  src={'/waving-hand.png'}
                  fill={true}
                  alt="Waving Hand Emoji"
                ></Image>
              </div>
            </div>
            <h1 className="mb-2 text-5xl font-bold">
              I'm Karol
              <span className="animate-blink ml-0.5 text-teal-primary">.</span>
            </h1>
            <h2 className="font-marker text-2xl font-bold text-teal-primary">
              Full-Stack Developer
            </h2>
          </Container>
          <Container className="flex justify-center pt-2 pb-6">
            <button onClick={() => console.log('scroll down')}>
              <ScrollDown></ScrollDown>
            </button>
          </Container>
        </header>

        <section className="h-screen"></section>

        <div className="bg-gridlines absolute top-0 left-0 h-full w-full">
          <Container className="mx-auto flex h-full justify-between text-gray-600 opacity-20 lg:opacity-30">
            <div className="h-full w-0.5 bg-current"></div>
            <div className="hidden h-full w-0.5 bg-current lg:block"></div>
            <div className="h-full w-0.5 bg-current"></div>
            <div className="hidden h-full w-0.5 bg-current lg:block"></div>
            <div className="h-full w-0.5 bg-current"></div>
          </Container>
        </div>
      </main>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
