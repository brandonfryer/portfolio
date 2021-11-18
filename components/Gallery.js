import styles from "../styles/Gallery.module.css"

const Gallery = () => {
    return ( 
        <>
            <div className={styles.row}> 
                <div className={styles.column}>
                    <img src="/fam/04.jpg" />
                    <img src="/fam/01.jpg" />
                    <img src="/fam/17.png" />
                    <img src="/fam/06.png" />
                    <img src="/fam/07.jpg" />
                </div>
                
                <div className={styles.column}>
                    <img src="/fam/10.jpg" />
                    <img src="/fam/14.jpg" />
                    <img src="/fam/16.jpg" />
                    <img src="/fam/12.jpg" />
                    <img src="/fam/02.jpg" />
                </div> 
                
                <div className={styles.column}>
                    <img src="/fam/13.jpg" />
                    <img src="/fam/03.jpg" />
                    <img src="/fam/05.jpg" />
                    <img src="/fam/15.jpg" />
                    <img src="/fam/18.jpg" />
                </div>
                <div className={styles.column}>
                    <img src="/fam/09.jpg" />
                    <img src="/fam/20.jpg" />
                    <img src="/fam/08.jpg" />
                    <img src="/fam/11.jpg" />
                    <img src="/fam/19.jpg" />
                </div>
            </div>
        </>
     );
}
 
export default Gallery;