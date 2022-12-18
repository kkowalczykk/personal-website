export type ShapeType = 'triangle' | 'circle' | 'hexagon' | 'cross' | 'steps';

export interface IShape {
  type: ShapeType;
  stroke?: string;
  opacity?: number;
  size?: number;
}

export const Shape: React.FC<IShape> = ({
  type,
  stroke = '#00E8B7',
  opacity = 60,
  size = 80,
}) => {
  const shapePath = (type: ShapeType) => {
    switch (type) {
      case 'triangle':
        return <TrianglePath></TrianglePath>;
      case 'cross':
        return <CrossPath></CrossPath>;
      case 'circle':
        return <CirclePath></CirclePath>;
      case 'hexagon':
        return <HexagonPath></HexagonPath>;
      case 'steps':
        return <StepsPath></StepsPath>;

      default:
        return <></>;
    }
  };

  return (
    <>
      <svg
        className="Shape"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        stroke={stroke}
        style={{ opacity: opacity }}
      >
        {shapePath(type)}
      </svg>
    </>
  );
};

const TrianglePath = () => {
  return (
    <path
      d="M1.74167 20.5L13 1L24.2583 20.5H1.74167Z"
      fill="none"
      strokeWidth="1"
    ></path>
  );
};
const CrossPath = () => {
  return (
    <>
      <line x1="12.1213" y1="3.82841" x2="19.9349" y2="26.5209" />
      <line x1="27.0643" y1="11.9034" x2="4.37189" y2="19.717" />
    </>
  );
};
const CirclePath = () => {
  return <circle cx="50%" cy="50%" r="10%" fill="none" />;
};

const HexagonPath = () => {
  return (
    <path
      d="M21.3955 1.50007L34.1376 13.3823L30.2183 30.3584L13.557 35.4523L0.814844 23.5701L4.73409 6.59396L21.3955 1.50007Z"
      fill="none"
    />
  );
};

const StepsPath = () => {
  return (
    <path
      d="M1 20.3109L6.45769 10.8579L16.3125 16.5475L22.6048 5.64894L31.8026 10.9593L37.5526 0.999995"
      fill="none"
    />
  );
};
