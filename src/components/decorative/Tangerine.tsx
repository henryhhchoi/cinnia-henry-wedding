interface Props {
  size?: number;
  className?: string;
}

const NATURAL_WIDTH = 40;
const NATURAL_HEIGHT = 44;

export default function Tangerine({ size = NATURAL_WIDTH, className }: Props) {
  const height = Math.round((NATURAL_HEIGHT / NATURAL_WIDTH) * size);
  return (
    <img
      src="/decorative/tangerine.svg"
      width={size}
      height={height}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
