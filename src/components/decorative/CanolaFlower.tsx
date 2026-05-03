type Variant = 1 | 2 | 3;

interface Props {
  variant?: Variant;
  size?: number;
  className?: string;
}

const VARIANTS: Record<Variant, { src: string; width: number; height: number }> = {
  1: { src: "/decorative/canola-flower-1.svg", width: 91,  height: 139 },
  2: { src: "/decorative/canola-flower-2.svg", width: 87,  height: 196 },
  3: { src: "/decorative/canola-flower-3.svg", width: 100, height: 155 },
};

export default function CanolaFlower({ variant = 1, size, className }: Props) {
  const { src, width: nw, height: nh } = VARIANTS[variant];
  const w = size ?? nw;
  const h = Math.round((nh / nw) * w);
  return (
    <img
      src={src}
      width={w}
      height={h}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
