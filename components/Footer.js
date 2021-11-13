import Image from "next/image";
import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <Link href="/">
            <a>
            Powered by Yo Momma{' '}
            <span className={styles.icon}>
                <Image  src="/icosahedron.png" width={20} height={20} />
            </span>
            </a>
            </Link>
        </footer>
     );
}
 
export default Footer;