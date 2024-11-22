import Link from "next/link";
import styles from "./Header.module.css";
import Sobre from "@/app/sobre/page";


export default function Header(){
return (
        <header>
            <nav>
                <ul className={styles.lista}>
                <li className={styles.home}>
                    <Link href= '/Home'>Home</Link>
                </li>
                <li>
                    <Link href= '/Sobre'>Sobre</Link>
                </li>
                <li>
                    <Link href='/Qudra'>Qudra</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}