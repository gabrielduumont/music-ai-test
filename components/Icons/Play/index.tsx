type HeartProps = {
  size?: number; //in pixels
};

export default function Play({ size }: HeartProps) {
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
      <path
        d="M42 30.8453C42.8889 31.3585 42.8889 32.6415 42 33.1547L26 42.3923C25.1111 42.9055 24 42.264 24 41.2376L24 22.7624C24 21.736 25.1111 21.0945 26 21.6077L42 30.8453Z"
        fill="black"
      />
    </svg>
  );
}
