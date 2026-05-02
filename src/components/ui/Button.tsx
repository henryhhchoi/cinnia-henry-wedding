import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "solid" | "outline";
  size?: "sm" | "md";
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type Props = ButtonProps | AnchorProps;

const base =
  "inline-block font-serif tracking-wide rounded-[6px] transition-colors cursor-pointer";

const sizes = {
  sm: "px-6 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
};

const variants = {
  solid:
    "bg-coral text-cream hover:bg-coral-deep border border-transparent",
  outline:
    "bg-cream text-coral border border-coral hover:bg-coral hover:text-cream",
};

export default function Button({
  variant = "solid",
  size = "md",
  as,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = [base, sizes[size], variants[variant], className].join(" ");

  if (as === "a") {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
