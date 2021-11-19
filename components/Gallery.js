import styles from "../styles/Gallery.module.css"

const Gallery = () => {
    return ( 
        <>
            <div className={styles.row}> 
                <div className={styles.column}>
                    <img src="/fam/04.jpg" alt="my son and I" />
                    <img src="/fam/01.jpg" alt="my family and I tie dying some t-shirts" />
                    <img src="/fam/17.jpg" alt="baby Forest in a dramatic sleeping pose" />
                    <img src="/fam/06.jpg" alt="me and my dog dancing around a campfire in the AZ desert" />
                    <img src="/fam/07.jpg" alt="Brandon and friends at the Sportsman bar" />
                </div>
                
                <div className={styles.column}>
                    <img src="/fam/10.jpg" alt="portrait of my family" />
                    <img src="/fam/14.jpg" alt="fun with friends at Lightning in a Bottle Music Festival" />
                    <img src="/fam/16.jpg" alt="portrait of my sister and my son" />
                    <img src="/fam/12.jpg" alt="family photo at the Electric Forest Music Festival" />
                    <img src="/fam/02.jpg" alt="my brother and I having a drink in downtown Austin, TX" />
                </div> 
                
                <div className={styles.column}>
                    <img src="/fam/13.jpg" alt="beautiful portrait of my mother and son" />
                    <img src="/fam/03.jpg" alt="Silas holding his new baby brother" />
                    <img src="/fam/05.jpg" alt="another dramatic sleeping pose from Forest" />
                    <img src="/fam/15.jpg" alt="snuggles with my dog" />
                    <img src="/fam/18.jpg" alt="Silas and I enjoying the sunshine" />
                </div>
                <div className={styles.column}>
                    <img src="/fam/09.jpg" alt="Zander, sitting pretty for a treat" />
                    <img src="/fam/20.jpg" alt="Silas and Zander smiling for the camera" />
                    <img src="/fam/08.jpg" alt="portrait of Zander" />
                    <img src="/fam/11.jpg" alt="all of my boys, in a cuddle puddle" />
                    <img src="/fam/19.jpg" alt="me, mom, brother and sister laughing on the couch" />
                </div>
            </div>
        </>
     );
}
 
export default Gallery;