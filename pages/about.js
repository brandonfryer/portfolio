import Image from "next/image"
import Portrait from "../public/Fam/portrait.jpg"
import Gallery from "../components/Gallery.js"
import styles from "../styles/About.module.css";

const About = () => {
    return (   
        <main className={styles.main}>
            <div className={styles.sect1}>
                <div className={styles.sect1content}>
                    <div className={styles.portrait}>
                        <Image 
                            src={Portrait}
                            className={styles.rounded}
                            layout="intrinsic" />
                    </div>
                    <div className={styles.text}>
                        <h2>About</h2>
                        <p>Tempor sunt cillum voluptate irure dolor proident. Consectetur aute irure esse reprehenderit quis nulla adipisicing tempor eu. Et cupidatat excepteur adipisicing esse deserunt ad magna eiusmod Lorem magna. Exercitation officia incididunt laboris sint nulla reprehenderit sint.</p>
                    </div>
                </div>
            </div>
            <div className={styles.sect2}>
                <div className={styles.sect2container}>
                    <h2>Gallery</h2>
                    <Gallery />
                </div>
            </div>
        </main>
     );
}
 
export default About;