"use client";

import styles from "./styles.module.css";

export function ThemeToggle() {
  function onClick() {
    const html = document.documentElement;
    const theme = html.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";

    window.localStorage.setItem("theme", theme);
    html.setAttribute("data-theme", theme);
  }

  return (
    <div id="theme-toggle" className={styles.toggle} onClick={onClick}>
      <div className={styles.indicator}></div>
    </div>
  );
}
