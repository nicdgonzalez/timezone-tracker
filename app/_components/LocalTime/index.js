"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export function LocalTime() {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("01/01/2000");

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = new Date();

      setTime(
        (() => {
          /** @type {Intl.DateTimeFormatOptions} */
          const options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          };
          return Intl.DateTimeFormat("en-US", options).format(now);
        })(),
      );

      setDate(
        (() => {
          /** @type {Intl.DateTimeFormatOptions} */
          const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          };
          return Intl.DateTimeFormat("en-US", options).format(now);
        })(),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.section} container`}>
      <p>YOUR TIME</p>
      <h1 className={styles.time}>{time}</h1>
      <h2 className={styles.date}>{date}</h2>
    </section>
  );
}
