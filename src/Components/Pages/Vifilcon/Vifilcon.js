import React from 'react'
import styles from '../Vifilcon/Vifilcon.module.css'
const Vifilcon = () => {
    return (
        <section>
            <div className={styles.main_div}>
                <div className={styles.EyeLine_div}>
                    <img src='Images/Eye_Line_art _01.png' />
                </div>
                <div className={styles.flex_div}>
                    <div className={styles.content_div}>
                        <div className={styles.Content}>
                            <div className={styles.Vifilcon_div}>
                                <h3>Vifilcon C</h3>
                                <p>The Vifilcon C is a proprietary contact lens material that uses a unique mechanism for the controlled release of natural substances directly to the eye called Lachryceuticals</p>
                            </div>
                            <div className={styles.Fusion_div}>
                                <h3>FusionTechnology®</h3>
                                <p>The Fusion Technology™ patented delivery system gradually releases natural polymers Hyaluronic Acid (HA), and Tamarind Seed Polysaccharide (TSP®), which mimic human tears.</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.Vifilcon_img_div}>

                        <div className={styles.Vifilcon_img}>
                            <img src='Images/Vifilcon_img2.png' />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Vifilcon
