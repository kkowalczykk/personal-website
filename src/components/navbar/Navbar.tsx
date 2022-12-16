import Link from 'next/link';
import Burger from '../burger/Burger';
import NavbarMenu from '../navbarMenu/NavbarMenu';

export interface INavbar {
  children?: React.ReactNode;
}

const Navbar: React.FC<INavbar> = ({ children }) => {
  return (
    <nav className="fixed left-0 top-0 z-30 flex w-full flex-1 flex-row items-center justify-between px-5 text-center text-white lg:px-20">
      <div className="container mx-auto flex justify-between py-3">
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <div className="flex flex-row items-center justify-center">
              <img src="/kkowalczyk_logo.svg" className="h-10" />
            </div>
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
