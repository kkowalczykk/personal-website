import { ReactElement, useRef, useState } from 'react';
import { NextPageWithLayout } from '../../pages/_app';
import Navbar from '../navbar/Navbar';
import { Kanit } from '@next/font/google';
import styles from './MainLayout.module.css';
import { atom, useAtom, useAtomValue } from 'jotai';
import SideMenu from '../sideMenu/SideMenu';
import Cursor from '../cursor/Cursor';

export const menuOpenAtom = atom(false);

const font = Kanit({
  weight: ['400', '700'],
  subsets: ['latin-ext', 'latin'],
});

export interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);
  const cursorTargetRef = useRef<HTMLDivElement>(null);
  return (
    <div className={'bg-dark-primary ' + font.className} ref={cursorTargetRef}>
      {/* START Perspective Wrapper */}
      <div
        className={
          `${styles.perspective}` +
          (menuOpen ? ` ${styles['perspective--active']}` : '')
        }
      >
        <Navbar></Navbar>
        <div className="MainLayout__body flex min-h-screen flex-col items-center justify-center bg-dark-primary text-white">
          {children}
        </div>
      </div>
      {/* END Perspective Wrapper */}

      <SideMenu open={menuOpen} setOpen={setMenuOpen}></SideMenu>

      <Cursor target={cursorTargetRef}></Cursor>
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
