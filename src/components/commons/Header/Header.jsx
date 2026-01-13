import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

import Container from "../Container/Container"

import {menuItems} from "./constans/HeaderData"

import styles from "./Header.module.scss"


const Header = () => {
    const [isScrolled , setIsScrolled] = useState(false)

    useEffect(() => {
        const eventScroll = () => {
            setIsScrolled(window.scrollY > 450)
        }

        window.addEventListener('scroll' , eventScroll);

        eventScroll();
    },[])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} id="header">
            <div className={styles.header__inner} id="header__inner">
                <Container variant="header">
                    <div className={styles.header__menu}>
                        <Link className={styles.header__logo} href="/">
                            <Image
                            className={`${styles.header__logo} ${isScrolled ? styles.header__logoInverted : ""}`}
                            id="header__logo"
                            src="/images/Logo/YourTour.png"
                            width={182}
                            height={32}
                            alt="YourTour"/>
                        </Link>
                        <nav className={styles.menu}>
                            <ul className={styles.menu__lists}>
                                {menuItems.map(item =>
                                    <li key={item.id} className={styles.menu__list}>
                                        <Link
                                            className={styles.menu__link}
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                        <div className={styles.contacts}>
                            <a href="tel:+79999999999" className={styles.contacts__number}>
                                +7 999 999 99 99
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
	    </header>
    )
}

export default Header