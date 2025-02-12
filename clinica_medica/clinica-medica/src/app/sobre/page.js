import styles from "./sobre.module.css"
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <p className={styles.para}>Clínica</p>
            <Image className={styles.img_sobre} src='/images/' alt="gfg" width={450} height={500} />
            <p className={styles.p}>seja bem vindo a nossa clinica</p>
        </main>
        
         
);
}