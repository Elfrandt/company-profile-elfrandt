import Link from "next/link";
import styles from "./Button.module.css";
import { cn } from "../../lib/utils";

type Props = {
  href?: string;
  variant?: "outline" | "solid";
  type?: "button" | "submit";
  children: React.ReactNode;
};

export default function Button({ href, variant = "outline", type = "button", children }: Props) {
  const className = cn(styles.button, styles[variant]);
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
