import styles from "./page.module.css";
import { Header } from "./_components/Header";
import { CardDisplay } from "./_components/CardDisplay";

export default function Home() {
  return (
    <>
      <Header />
      <main id="cards" className={styles.main}>
        <CardDisplay />
      </main>
    </>
  );
}
