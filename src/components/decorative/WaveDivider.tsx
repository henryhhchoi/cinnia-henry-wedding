interface Props {
  size?: number;
  className?: string;
}

const NATURAL_WIDTH = 160;
const NATURAL_HEIGHT = 24;

export default function WaveDivider({ size = NATURAL_WIDTH, className }: Props) {
  const height = Math.round((NATURAL_HEIGHT / NATURAL_WIDTH) * size);
  return (
    <img
      src="/decorative/wave-divider.svg"
      width={size}
      height={height}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
