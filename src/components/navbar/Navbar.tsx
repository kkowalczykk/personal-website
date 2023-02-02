import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Burger from '../burger/Burger';
import NavbarMenu from '../navbarMenu/NavbarMenu';
import { motion } from 'framer-motion';
export interface INavbar {
  children?: React.ReactNode;
}

const Navbar: React.FC<INavbar> = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollPos = window.pageYOffset;
    const navbarScrollEffect = (event: Event) => {
      const navbar = navbarRef.current;
      const navbarHeight = navbar?.clientHeight;

      let currentScrollPos = window.pageYOffset;

      // Hide navbar on scroll down
      if (scrollPos > currentScrollPos) {
        navbar?.classList.remove('-translate-y-full');
      } else {
        navbar?.classList.add('-translate-y-full');
      }
      scrollPos = currentScrollPos;

      // If page is scrolled down, change navbar appearance
      if (navbarHeight) {
        if (window.scrollY > navbarHeight) {
          navbar?.classList.add(
            'bg-dark-primary/80',
            'backdrop-blur-md',
            'shadow-lg'
          );
          navbar?.classList.remove('py-2');
        } else {
          navbar?.classList.remove(
            'bg-dark-primary/80',
            'backdrop-blur-md',
            'shadow-lg'
          );
          navbar?.classList.add('py-2');
        }
      }
    };

    window.addEventListener('scroll', navbarScrollEffect);

    return () => {
      window.removeEventListener('scroll', navbarScrollEffect);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar fixed left-0 top-0 z-30 flex w-full flex-1 flex-row items-center justify-between px-5 text-center text-white transition-all duration-300 lg:px-10 xl:px-20"
    >
      <div className="container mx-auto flex justify-between py-4 md:max-lg:max-w-5xl lg:max-xl:max-w-6xl">
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-row items-center justify-center"
            >
              <Image
                src={'/kkowalczyk_logo.svg'}
                className="h-10 object-contain"
                width={40}
                height={40}
                alt="kkowalczyk.dev - Logo"
              />
              {/* <img src="/kkowalczyk_logo.svg" className="h-10" /> */}
            </motion.div>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="block lg:hidden">
            <Burger></Burger>
          </div>
          <div className="hidden lg:block">
            <NavbarMenu></NavbarMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
