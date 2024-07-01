import styles from "./styles.module.css";

export function FormLabelWave({ children, type, id, text, list = "" }) {
  const chars = [];

  for (var i = 0; i < text.length; ++i) {
    chars.push(
      <span
        key={`char-${i}`}
        style={{ "--index": i < 4 ? i : 3 }}
        className={styles.char}
      >
        {text.charAt(i)}
      </span>,
    );
  }

  return (
    <div className={styles.wave}>
      <input
        className={styles.input}
        type={type}
        name={id}
        id={id}
        list={list}
        required
      />
      <label className={styles.label} htmlFor={id}>
        {chars}
      </label>
      {children}
    </div>
  );
}
