"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { navLinks } from "../../data/navigation";
import { cn, isActivePath } from "../../lib/utils";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav} aria-label="Main navigation">
          <Logo />
          <button
            className={styles.toggle}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
          <ul className={cn(styles.links, open && styles.open)}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                  className={cn(styles.link, isActivePath(pathname, link.href) && styles.active)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
