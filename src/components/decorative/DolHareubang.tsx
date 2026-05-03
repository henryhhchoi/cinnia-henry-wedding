interface Props {
  size?: number;
  className?: string;
}

const NATURAL_WIDTH = 980;
const NATURAL_HEIGHT = 980;

export default function DolHareubang({ size = NATURAL_WIDTH, className }: Props) {
  const height = Math.round((NATURAL_HEIGHT / NATURAL_WIDTH) * size);
  return (
    <img
      src="/decorative/dol-hareubang.svg"
      width={size}
      height={height}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
