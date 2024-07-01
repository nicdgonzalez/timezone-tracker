import { Nunito_Sans } from "next/font/google";
import styles from "./styles.module.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export function CardCreateButton() {
  /** @param {PointerEvent} _event */
  function onClick(_event) {
    const cardCreateForm = document.getElementById("form-card");

    if (cardCreateForm == undefined) {
      return;
    }

    cardCreateForm.style.display = "block";
  }

  return (
    <div className={styles.button} onClick={onClick}>
      <div className={`${styles.plus} ${nunitoSans.className}`}>+</div>
    </div>
  );
}
