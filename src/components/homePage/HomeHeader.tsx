import { useAtomValue } from 'jotai';
import Image from 'next/image';
import Container from '../container/Container';
import { updateScrollPosAtom } from '../layouts/MainLayout';
import ScrollDown from '../scrollDown/ScrollDown';

export interface IHomeHeader extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeHeader: React.FC<IHomeHeader> = ({ children }) => {
  const updateScrollPos = useAtomValue(updateScrollPosAtom);
  return (
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
        <button
          onClick={() => {
            scrollTo({
              top: document.getElementById('about-me')?.offsetTop,
              behavior: 'smooth',
            });
          }}
        >
          <ScrollDown></ScrollDown>
        </button>
      </Container>
    </header>
  );
};
