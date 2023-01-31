export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return (
    <div
      className={
        'container mx-auto px-5 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl' +
        (className ? ` ${className}` : '')
      }
    >
      {children}
    </div>
  );
};

export default Container;
