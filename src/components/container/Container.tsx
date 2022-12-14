export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return (
    <div
      className={
        'container mx-auto xl:max-w-7xl' + (className ? ` ${className}` : '')
      }
    >
      {children}
    </div>
  );
};

export default Container;
