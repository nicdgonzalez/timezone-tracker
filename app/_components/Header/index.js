"use client";

import { Card } from "../Card";
import styles from "./styles.module.css";

/**
 * @param {String} timezone
 * @returns {String}
 */
function getDateTime(timezone) {
  const now = new Date();

  /** @type {Intl.DateTimeFormatOptions} */
  const optionsDate = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: timezone,
  };
  const date = Intl.DateTimeFormat("en-US", optionsDate).format(now);

  /** @type {Intl.DateTimeFormatOptions} */
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: timezone,
  };
  const time = Intl.DateTimeFormat("en-US", optionsTime).format(now);

  return `${date} @ ${time}`;
}

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.column}`}>
          <h1 className={`${styles.heading}`}>
            Stay Connected Across Timezones!
          </h1>
          <p className={styles.subheading}>
            Never miss a moment! Create personalized cards for friends
            worldwide, effortlessly tracking their local times. Simplify
            planning and stay connected no matter where you are.
          </p>
          <a className={`${styles.action} ${styles.button}`} href="#cards">
            Get Started{" "}
            <span className={`${styles.arrow} ${styles.right}`}></span>
          </a>
        </div>
        <div className={`${styles.column} ${styles.cards}`}>
          <Card
            index={-1}
            name="You"
            label="Your Card"
            timezone={(() => {
              return Intl.DateTimeFormat().resolvedOptions().timeZone;
            })()}
            color="#e0a6bb"
            onCardDelete={() => {}}
            dateTime={getDateTime(
              Intl.DateTimeFormat().resolvedOptions().timeZone,
            )}
          />
          <Card
            index={-1}
            name="Friend"
            label="Friend's Card"
            timezone="Japan"
            color="#87c999"
            onCardDelete={() => {}}
            dateTime={getDateTime("Japan")}
          />
        </div>
      </div>
    </header>
  );
}
