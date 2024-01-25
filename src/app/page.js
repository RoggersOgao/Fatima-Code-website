import styles from "./page.module.css";
import HomeC from "@/components/home/HomeC";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeC />
    </main>
  );
}
