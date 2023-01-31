import { MdMessage } from 'react-icons/md';

const NavbarMenu: React.FC<{}> = () => {
  return (
    <ul className="flex flex-row items-center justify-center space-x-10">
      <NavbarMenuItem text="About" path="#about-me" index="01"></NavbarMenuItem>
      <NavbarMenuItem
        text="Expertise"
        path="#my-expertise"
        index="02"
      ></NavbarMenuItem>
      <NavbarMenuItem
        text="Projects"
        path="#projects"
        index="03"
      ></NavbarMenuItem>
      <NavbarMenuItem text="Contact" path="#" index="04"></NavbarMenuItem>
      <button className="select-none  rounded-md border-2 border-orange-primary py-1.5 px-4 text-sm font-bold text-orange-primary transition-all hover:bg-orange-primary/10">
        Send a message{' '}
      </button>
    </ul>
  );
};

export default NavbarMenu;

interface INavbarMenuItem extends React.HTMLAttributes<HTMLLIElement> {
  text: string;
  path: string;
  index?: string;
  onClick?: () => void;
}

const NavbarMenuItem: React.FC<INavbarMenuItem> = ({
  text,
  path,
  className,
  index,
  onClick,
}) => {
  return (
    <li className="SideMenuItem" onClick={onClick}>
      <a
        className="sticky-hover relative flex flex-col after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:rounded-full after:bg-orange-primary after:transition-transform after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
        href={path}
      >
        <div className="absolute top-0 right-0 inline-flex -translate-y-full self-end font-marker text-xs leading-none text-gray-600">{`${index}`}</div>
        <div className="inline-flex font-bold leading-none tracking-wider">
          <SideMenuItemPrefix></SideMenuItemPrefix>
          <span>{text}</span>
        </div>
      </a>
    </li>
  );
};

const SideMenuItemPrefix: React.FC<{}> = () => {
  return <span className="mr-1 font-marker text-orange-primary">#</span>;
};
