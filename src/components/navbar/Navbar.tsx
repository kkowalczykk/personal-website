import Link from 'next/link';
import Burger from '../burger/Burger';

export interface INavbar {
  children?: React.ReactNode;
}

const Navbar: React.FC<INavbar> = ({ children }) => {
  return (
    <nav className="fixed left-0 top-0 z-30 flex w-full flex-1 flex-row items-center justify-between px-20 text-center text-white">
      <div className="container mx-auto flex justify-between py-3">
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <div className="flex flex-row items-center justify-center">
              <img src="/kkowalczyk_logo.svg" className="h-10" />
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Burger></Burger>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
