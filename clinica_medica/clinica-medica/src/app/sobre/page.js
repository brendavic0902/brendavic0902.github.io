import styles from "./sobre.module.css";
import Image from "next/image";
export default function Sobre() {
    return (
        <main>
            <p className={styles.para}>Abel Makkonen Tesfaye, mais conhecido por seu nome artístico The Weeknd, é um cantor, compositor, ator e produtor musical canadense.</p>
            <Image className={styles.img_sobre} src='/images/theweeknd.jpg' alt="gfg" width={450} height={500} />
            <p className={styles.p}> Em 2010, ele começou a disponibilizar anonimamente várias canções no YouTube sob o nome "The Weeknd" e, em 2011, lançou as aclamadas mixtapes House of Balloons, Thursday e Echoes of Silence. 
                Suas mixtapes foram posteriormente remasterizadas e relançadas na coletânea Trilogy (2012). </p>
        </main>
        
         
);
}