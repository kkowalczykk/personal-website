const NavbarMenu: React.FC<{}> = () => {
  return (
    <ul className="flex flex-row items-center justify-center space-x-10">
      <NavbarMenuItem text="Home" path="/" index="01"></NavbarMenuItem>
      <NavbarMenuItem text="About me" path="#" index="02"></NavbarMenuItem>
      <NavbarMenuItem text="Projects" path="#" index="03"></NavbarMenuItem>
      <NavbarMenuItem text="Contact" path="#" index="04"></NavbarMenuItem>
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
        className="sticky-hover relative flex flex-col after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:rounded-full after:bg-yellow-primary after:transition-transform after:duration-200  hover:after:origin-bottom-left hover:after:scale-x-100"
        href={path}
      >
        <div className="inline-flex self-end font-marker text-xs text-gray-600">{`${index}`}</div>
        <div className="inline-flex font-bold leading-none tracking-wider">
          <SideMenuItemPrefix></SideMenuItemPrefix>
          {text}
        </div>
      </a>
    </li>
  );
};

const SideMenuItemPrefix: React.FC<{}> = () => {
  return <span className="mr-1 font-marker text-teal-primary">#</span>;
};
