import styles from './Stars.module.css';

const Stars: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-full ">
        <div id="stars" className=""></div>
        <div id="stars2" className=""></div>
        <div id="stars3" className=""></div>
      </div>
    </>
  );
};

export default Stars;
