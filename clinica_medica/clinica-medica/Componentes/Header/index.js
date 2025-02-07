'use client';

import { useState, UseEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <Image className={styles.img} src='/images/abel.jpg' alt=" logo " width={50} height={150} />
                
            </div>

            {isMenuOpen &&
                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.lista}>
                       <li>
                            <Link className={styles.link} href="/home">Home</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/medicos">Médicos</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/pacientes">Pacientes</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/agendamento">Agendamento</Link>
                        </li>
                    </ul>
                </nav>
            }
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? 'Fechar' : 'Menu'}
            </button>
        </header>
    );
};