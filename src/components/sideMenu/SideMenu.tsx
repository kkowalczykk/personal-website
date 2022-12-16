import { useRef } from 'react';
import useClickOutside from '../../utils/useClickOutside';
import Container from '../container/Container';
import { MdClose } from 'react-icons/md';
import { Permanent_Marker } from '@next/font/google';
import { useSetAtom } from 'jotai';

export interface ISideMenu extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Permanent_Marker_font = Permanent_Marker({
  weight: ['400'],
  subsets: ['latin'],
});

const SideMenu: React.FC<ISideMenu> = ({ children, open, setOpen }) => {
  const sideMenuRef = useRef(null);
  useClickOutside(sideMenuRef, () => setOpen(false), open);
  const handleMenuItemClick = () => setOpen(false);
  return (
    <div
      ref={sideMenuRef}
      className={
        'fixed top-0 right-0 h-screen w-screen bg-dark-primary bg-opacity-50 text-white backdrop-blur-md transition-transform duration-200' +
        (open ? '' : ' translate-x-full')
      }
    >
      <Container className="flex h-full flex-col">
        <div className="SideMenu__header py-4">
          <button
            className="text-4xl text-teal-primary"
            onClick={() => setOpen(false)}
          >
            <MdClose></MdClose>
          </button>
        </div>
        <ul className="SideMenu__main flex flex-1 flex-col items-center justify-center space-y-8 text-2xl">
          <SideMenuItem
            text="Home"
            path="/"
            index="01"
            onClick={handleMenuItemClick}
          ></SideMenuItem>
          <SideMenuItem
            text="About"
            path="/about"
            index="02"
            onClick={handleMenuItemClick}
          ></SideMenuItem>
        </ul>
      </Container>
    </div>
  );
};

export default SideMenu;

interface ISideMenuItem extends React.HTMLAttributes<HTMLLIElement> {
  text: String;
  path: String;
  index?: string;
  onClick?: () => void;
}

const SideMenuItem: React.FC<ISideMenuItem> = ({
  text,
  path,
  className,
  index,
  onClick,
}) => {
  return (
    <li className="SideMenuItem flex flex-col" onClick={onClick}>
      <div
        className={
          'inline-flex self-end text-xs text-gray-600 ' +
          Permanent_Marker_font.className
        }
      >{`${index}`}</div>
      <div className="inline-flex leading-none tracking-wider">
        <SideMenuItemPrefix></SideMenuItemPrefix>
        {text}
      </div>
    </li>
  );
};

const SideMenuItemPrefix: React.FC<{}> = () => {
  return (
    <span
      className={Permanent_Marker_font.className + ' mr-1 text-teal-primary'}
    >
      #
    </span>
  );
};
