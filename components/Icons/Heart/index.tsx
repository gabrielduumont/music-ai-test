type HeartProps = {
  isFilled?: boolean;
  size?: number; //in pixels
};
const FILLED_COLOR = '#F8594E';

export default function Heart({ isFilled, size }: HeartProps) {
  const iconSize = size ? size : 20;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.56859 3.87749L10.03 4.43561L10.5455 3.87749C12.3592 2.00054 15.1714 2.08784 17.0363 3.87749L17.1677 4.00844C18.9814 5.8854 18.537 9.63697 16.8076 11.5669L16.5802 11.8156L16.3269 12.083C15.3511 13.0971 13.8554 14.4856 11.8398 16.2484L10.6888 17.247C10.2916 17.5891 9.71365 17.5838 9.32246 17.2344L7.90167 15.9581L6.6367 14.8065C5.13309 13.4267 4.00446 12.3468 3.25081 11.5669C1.3939 9.64526 1.03653 5.93009 2.89345 4.00844C4.75036 2.0868 7.71167 1.95585 9.56859 3.87749Z"
        fill={isFilled ? FILLED_COLOR : undefined}
        stroke={isFilled ? FILLED_COLOR : 'white'}
        strokeWidth="1.5"
      />
    </svg>
  );
}
