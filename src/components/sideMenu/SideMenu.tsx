import { useRef } from 'react';
import useClickOutside from '../../utils/useClickOutside';
import Container from '../container/Container';
import { MdClose, MdMailOutline } from 'react-icons/md';
import { TbBrandGithub } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';

export interface ISideMenu extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<ISideMenu> = ({ open, setOpen }) => {
  const sideMenuRef = useRef(null);
  useClickOutside(sideMenuRef, () => setOpen(false), open);
  const handleMenuItemClick = () => setOpen(false);
  return (
    <div
      ref={sideMenuRef}
      className={
        'fixed top-0 right-0 z-30 h-screen w-screen bg-dark-primary bg-opacity-70 text-white backdrop-blur-md transition-transform duration-200' +
        (open ? '' : ' translate-x-full')
      }
    >
      <Container className="flex h-full flex-col">
        <div className="SideMenu__header py-4">
          <button
            className="text-4xl text-orange-primary"
            onClick={() => setOpen(false)}
          >
            <MdClose></MdClose>
          </button>
        </div>
        <ul className="SideMenu__main flex flex-1 flex-col items-center justify-center space-y-8 text-2xl">
          <SideMenuItem
            text="About"
            path="#about-me"
            index="01"
            onClick={handleMenuItemClick}
          ></SideMenuItem>
          <SideMenuItem
            text="Expertise"
            path="#expertise"
            index="02"
            onClick={handleMenuItemClick}
          ></SideMenuItem>
          <SideMenuItem
            text="Projects"
            path="#projects"
            index="03"
            onClick={handleMenuItemClick}
          ></SideMenuItem>
          <SideMenuItem
            text="Contact"
            path="#contact"
            index="04"
            onClick={handleMenuItemClick}
          ></SideMenuItem>
          <div>
            <button
              onClick={() => {
                handleMenuItemClick();
                scrollTo({
                  // @ts-ignore
                  top: document.querySelector('#contact')?.offsetTop,
                  behavior: 'smooth',
                });
              }}
              className="mt-4 select-none rounded-md border-2 border-orange-primary py-1.5 px-4 text-lg font-bold text-orange-primary transition-all hover:bg-orange-primary/10"
            >
              Send a message{' '}
            </button>
          </div>
        </ul>
        <div className="Icons flex justify-center space-x-6 py-4">
          <a
            href="https://github.com/kkowalczykk"
            target={'_blank'}
            rel="noreferrer"
            className=" transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-primary"
          >
            <TbBrandGithub className="block h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kkowalczykk/"
            target={'_blank'}
            rel="noreferrer"
            className=" transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-primary"
          >
            <FiLinkedin className="block h-5 w-5" />
          </a>
          <a
            href="mailto:me@kkowalczyk.dev"
            className=" transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-primary"
          >
            <MdMailOutline className="block h-6 w-6" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default SideMenu;

interface ISideMenuItem extends React.HTMLAttributes<HTMLLIElement> {
  text: string;
  path: string;
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
      <div className="inline-flex self-end font-marker text-xs text-gray-600">{`${index}`}</div>
      <a className="inline-flex leading-none tracking-wider" href={path}>
        <SideMenuItemPrefix></SideMenuItemPrefix>
        {text}
      </a>
    </li>
  );
};

const SideMenuItemPrefix: React.FC = () => {
  return <span className="mr-1 font-marker text-orange-primary">#</span>;
};
