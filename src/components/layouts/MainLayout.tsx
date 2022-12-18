import { useRef, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { Kanit, Permanent_Marker } from '@next/font/google';
import styles from './MainLayout.module.css';
import { atom, useAtom, useAtomValue } from 'jotai';
import SideMenu from '../sideMenu/SideMenu';
import Cursor from '../cursor/Cursor';
import SmoothScroll from '../../utils/SmoothScroll';
import usePointerMatch from '../../utils/usePointerMatch';
import { BgGridlines } from '../backgrounds/Gridlines';

export const menuOpenAtom = atom(false);
export const isPointerAtom = atom(false);

const font = Kanit({
  weight: ['400', '700'],
  subsets: ['latin-ext', 'latin'],
});

const Permanent_Marker_font = Permanent_Marker({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-marker',
});

export interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);
  const contentRef = useRef<HTMLDivElement>(null);
  const pointerMatch = usePointerMatch();
  const isPointer = useAtomValue(isPointerAtom);

  useEffect(function () {
    // @ts-ignore
    const smoothScroll = new SmoothScroll(document, 120, 12);
    smoothScroll.init();
    return () => {
      smoothScroll.destroy();
    };
  }, []);

  return (
    <div
      className={
        'overflow-x-hidden bg-dark-primary ' +
        `${font.className} ${Permanent_Marker_font.variable}`
      }
      ref={contentRef}
    >
      <Navbar></Navbar>
      <BgGridlines />
      {/* START Perspective Wrapper */}
      <div
        className={
          `${styles.perspective}` +
          (menuOpen ? ` ${styles['perspective--active']}` : '')
        }
      >
        <div className="MainLayout__body flex min-h-screen flex-col items-center justify-center text-white">
          {children}
        </div>
      </div>
      {/* END Perspective Wrapper */}

      <SideMenu open={menuOpen} setOpen={setMenuOpen}></SideMenu>

      {isPointer && <Cursor></Cursor>}
      {/* <style jsx global>
        {`
          * {
            cursor: none;
          }
        `}
      </style> */}
    </div>
  );
};

export default MainLayout;
