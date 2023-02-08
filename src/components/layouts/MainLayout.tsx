import { useRef, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { Kanit, Permanent_Marker, Fira_Mono } from '@next/font/google';
import styles from './MainLayout.module.css';
import { atom, useAtom, useAtomValue } from 'jotai';
import SideMenu from '../sideMenu/SideMenu';
import Cursor from '../cursor/Cursor';
import usePointerMatch from '../../utils/usePointerMatch';
import { BgGridlines } from '../backgrounds/Gridlines';
import { SideIcons } from '../sideIcons/SideIcons';
import { MainLayoutLoader } from './MainLayoutLoader';
import { Toaster } from 'react-hot-toast';

export const menuOpenAtom = atom(false);
export const isPointerAtom = atom(false);
export const isLoadedAtom = atom(false);
export const mountPageAtom = atom(false);

const font = Kanit({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin-ext', 'latin'],
});

const Permanent_Marker_font = Permanent_Marker({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-marker',
});

const Fira_Mono_font = Fira_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fira-mono',
});

export interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);
  const contentRef = useRef<HTMLDivElement>(null);
  const pointerMatch = usePointerMatch();
  const isPointer = useAtomValue(isPointerAtom);
  const isLoaded = useAtomValue(isLoadedAtom);
  const mount = useAtomValue(mountPageAtom);

  useEffect(() => {
    if (menuOpen) {
      contentRef.current?.classList.add('overflow-y-hidden');
      document.querySelector('body')?.classList.add('overflow-y-hidden');
    } else {
      contentRef.current?.classList.remove('overflow-y-hidden');
      document.querySelector('body')?.classList.remove('overflow-y-hidden');
    }
  }, [menuOpen]);

  useEffect(() => {
    if (isLoaded) {
      document.querySelector('body')?.classList.remove('overflow-y-hidden');
      document.querySelector('body')?.classList.add('overflow-y-auto');
    } else {
      document.querySelector('body')?.classList.remove('overflow-y-auto');
      document.querySelector('body')?.classList.add('overflow-y-hidden');
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <MainLayoutLoader></MainLayoutLoader>}
      {mount && (
        <div
          className={
            'overflow-x-hidden bg-dark-primary ' +
            `${font.className} ${Permanent_Marker_font.variable} ${Fira_Mono_font.variable}`
          }
          ref={contentRef}
        >
          <Navbar></Navbar>
          <BgGridlines />
          <SideIcons></SideIcons>
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
          <Toaster />
          {isPointer && <Cursor></Cursor>}
        </div>
      )}
    </>
  );
};

export default MainLayout;
