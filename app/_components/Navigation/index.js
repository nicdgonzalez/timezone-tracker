"use client";

import { ThemeToggle } from "../ThemeToggle";
import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.brand}>
          TIMEZONE <strong className={styles.strong}>TRACKER</strong>
        </h1>
        <ThemeToggle />
      </div>
    </nav>
  );
}
