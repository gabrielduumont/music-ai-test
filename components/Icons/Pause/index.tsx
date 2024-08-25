type HeartProps = {
  size?: number; //in pixels
};

export default function Pause({ size }: HeartProps) {
  const iconSize = size ? size : 64;
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={iconSize} height={iconSize} rx={iconSize / 2} fill="white" />
      <rect x="22" y="20" width="8" height="24" fill="black" />
      <rect x="34" y="20" width="8" height="24" fill="black" />
    </svg>
  );
}
