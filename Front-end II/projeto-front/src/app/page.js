import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>THE WEEKND</h1>
      <Image className={styles.img}src='/images/dany.jpg' alt="the weeknd" width={400} height={400} / >
    </div>
  );
}
