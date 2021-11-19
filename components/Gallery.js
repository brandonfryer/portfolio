import styles from "../styles/Gallery.module.css"

const Gallery = () => {
    return ( 
        <>
            <div className={styles.row}> 
                <div className={styles.column}>
                    <img src="/fam/04.jpg" alt="" />
                    <img src="/fam/01.jpg" alt="" />
                    <img src="/fam/17.png" alt="" />
                    <img src="/fam/06.png" alt="" />
                    <img src="/fam/07.jpg" alt="" />
                </div>
                
                <div className={styles.column}>
                    <img src="/fam/10.jpg" alt="" />
                    <img src="/fam/14.jpg" alt="" />
                    <img src="/fam/16.jpg" alt="" />
                    <img src="/fam/12.jpg" alt="" />
                    <img src="/fam/02.jpg" alt="" />
                </div> 
                
                <div className={styles.column}>
                    <img src="/fam/13.jpg" alt="" />
                    <img src="/fam/03.jpg" alt="" />
                    <img src="/fam/05.jpg" alt="" />
                    <img src="/fam/15.jpg" alt="" />
                    <img src="/fam/18.jpg" alt="" />
                </div>
                <div className={styles.column}>
                    <img src="/fam/09.jpg" alt="" />
                    <img src="/fam/20.jpg" alt="" />
                    <img src="/fam/08.jpg" alt="" />
                    <img src="/fam/11.jpg" alt="" />
                    <img src="/fam/19.jpg" alt="" />
                </div>
            </div>
        </>
     );
}
 
export default Gallery;