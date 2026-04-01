import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  ariaLabel: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2";

const variantStyles: Record<ButtonVariant, string> = {
  solid: "bg-denim-700 text-beige-50 hover:bg-denim-900 shadow-soft hover:-translate-y-0.5",
  outline: "border border-denim-700 text-denim-900 hover:bg-denim-50",
  ghost: "text-denim-900 hover:bg-sky-100"
};

export function Button({ children, variant = "solid", className, href, type = "button", onClick, ariaLabel }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
