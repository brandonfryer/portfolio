import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'

const Navbar = () =>  {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <ul className={isOpen === false ? styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/'>
                            <a className={isOpen === false ? 
                                styles.navlink : styles.navlink+' '+styles.active}
                                onClick={openMenu}>HOME</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/about'>
                            <a className={isOpen === false ? 
                                styles.navlink : styles.navlink+' '+styles.active}
                                onClick={openMenu}>ABOUT</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/portfolio'>
                            <a className={isOpen === false ? 
                                styles.navlink : styles.navlink+' '+styles.active}
                                onClick={openMenu}>PORTFOLIO</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/contact'>
                            <a className={isOpen === false ? 
                                styles.navlink : styles.navlink+' '+styles.active}
                                onClick={openMenu}>CONTACT</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.center}>
                <Link href="/">
                    <a>
                        <span className={styles.logo}>
                            <Image src="/icosahedron-wht.png" width={60} height={60} />
                        </span>
                    </a>
                </Link>
            </div>
            <div className={styles.right}>
                <button className={isOpen === false ? 
                    styles.hamburger : styles.hamburger+' '+styles.active}
                    onClick={openMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
        </nav>
      );
}
 
export default Navbar;