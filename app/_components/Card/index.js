import { Roboto_Mono } from "next/font/google";

import styles from "./styles.module.css";
import { timezoneToAbbrev } from "@/public/data/timezones";

const mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export function Card({
  index,
  name,
  label = "Friend",
  timezone,
  color,
  onCardDelete,
  dateTime = "01/01/2000 @ 00:00:00",
}) {
  return (
    <div data-index={index} className={styles.card}>
      <div
        className={styles.color}
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className={styles.main}>
        <div className={styles.close} onClick={onCardDelete}>
          +
        </div>
        <div className={styles.group}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.timezone}>{timezoneToAbbrev[timezone]}</h2>
        </div>
        <h2 className={styles.label}>{label}</h2>
        <p
          id={`card-${index}`}
          data-timezone={timezone}
          className={`${styles.timestamp} ${mono.className}`}
        >
          {dateTime}
        </p>
      </div>
    </div>
  );
}
