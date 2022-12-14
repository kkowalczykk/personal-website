import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../../pages/_app';
import Navbar from '../navbar/Navbar';
import { Kanit } from '@next/font/google';
import styles from './MainLayout.module.css';
import { atom, useAtom, useAtomValue } from 'jotai';

export const menuOpenAtom = atom(false);

const font = Kanit({
  weight: ['400', '700'],
  subsets: ['latin-ext', 'latin'],
});

export interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const menuOpen = useAtomValue(menuOpenAtom);

  return (
    <div className={'bg-slate-900 ' + font.className}>
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
    </div>
  );
};

export default MainLayout;
