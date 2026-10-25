import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Link href="/" className={styles.logo} aria-label="Luxion - Home">
      <Image
        src="/logo.png"
        alt="luxion"
        width={size}
        height={size}
        sizes={`${size}px`}
        className={styles.image}
        priority
      />
      <span>Luxion</span>
    </Link>
  );
}