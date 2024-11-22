import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Meu título</h1>
      <Image className={styles.img}src='/images/dany.jpg' alt="Imagem da mae dos dragoes" width={400} height={400} / >
    </div>
  );
}
