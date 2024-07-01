import { Nunito_Sans } from "next/font/google";
import styles from "./styles.module.css";
import { FormLabelWave } from "../FormLabelWave";
import { timezones } from "@/public/data/timezones";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export function CardCreateForm({ onSubmit }) {
  /** @param {PointerEvent} event */
  function onClick(event) {
    const formCard = document.getElementById("form-card");

    if (formCard.style.display !== "none") {
      formCard.style.display = "none";
    }
  }

  return (
    <>
      <div id="form-card-overlay" onClick={onClick}></div>
      <div id="form-card" className={styles.modal} style={{ display: "none" }}>
        <div className={styles.header}>
          <div
            className={`${styles.close} ${nunitoSans.className}`}
            onClick={onClick}
          >
            +
          </div>
        </div>
        <div className={styles.body}>
          <form
            action="/create-card"
            method="post"
            onSubmit={onSubmit}
            className={styles.form}
          >
            <ul>
              <li>
                <FormLabelWave type="text" id="form-card-name" text="Name" />
              </li>
              <li>
                <FormLabelWave type="text" id="form-card-label" text="Label" />
              </li>
              <li>
                <FormLabelWave
                  type="text"
                  id="form-card-timezone"
                  text="Timezone"
                  list="timezone-data"
                />
                <datalist id="timezone-data" name="timezone-data">
                  {timezones.map((e, i) => {
                    return (
                      <option key={`timezone-${i}`} value={e.value}>
                        {e.label}
                      </option>
                    );
                  })}
                </datalist>
              </li>
              <li>
                <input
                  className={styles.input}
                  type="color"
                  name="form-card-color"
                  id="form-card-color"
                  required
                />
              </li>
              <li>
                <button className={styles.submit}>Create</button>
              </li>
            </ul>
          </form>
        </div>
        <div className={styles.footer}>{/* ... */}</div>
      </div>
    </>
  );
}
