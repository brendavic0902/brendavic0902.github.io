import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className={styles.h1}>THE WEEKND</h1>
      <p className={styles.p}>Conhecido por sua versatilidade sonora e lirismo sombrio, suas músicas exploram temas de escapismo, romance e melancolia, e são frequentemente inspiradas em experiências pessoais. 
        Ele ajudou a expandir a paleta musical do R&B, ao incorporar influências indie e de música eletrônica; seus trabalhos iniciais foram classificados como sendo R&B alternativo.</p>
      <Image className={styles.img}src='/images/dany.jpg' alt="the weeknd" width={400} height={400} / >
    </div>
  );
}
