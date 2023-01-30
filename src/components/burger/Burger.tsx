import { useAtom } from 'jotai';
import { menuOpenAtom } from '../layouts/MainLayout';

export interface IBurger extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Burger: React.FC<IBurger> = ({ children, className, onClick }) => {
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className={
        'flex h-5 w-7 cursor-pointer flex-col items-center justify-between focus:outline-none' +
        (className ? ` ${className}` : '')
      }
    >
      <span className="h-0.5 w-3/4 rounded-full bg-orange-primary"></span>
      <span className="h-0.5 w-full rounded-full bg-orange-primary"></span>
      <span className="h-0.5 w-3/4 rounded-full bg-orange-primary"></span>
    </button>
  );
};

export default Burger;
