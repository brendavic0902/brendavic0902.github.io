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
                            <Link className={styles.link} href='/'>Home</Link>
                        </li>

                        <li>
                            <Link className={styles.link} href="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/discografia">Disco</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/props">Props</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/state">State</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/filtro">filtro</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/efeitos">Efeitos</Link>
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



