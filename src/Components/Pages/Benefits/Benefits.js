import React from 'react'
import styles from "../Benefits/Benefits.module.css"
const Benefits = () => {
    return (
        <section>
           
            <div className={styles.Benefits_main}>
               
                <div className={styles.Benefits_img}>
                    <img src='Images/Key-Benefits (2).png' />
                </div>

                <div className={styles.Benefits_Key}>
                    <div className={styles.Benefits_box}>
                        <div className={styles.Key}><p>Increased <br />Tear Stability</p></div>
                        <div className={styles.Key}><p>Prolonged <br />Effect</p></div>
                        <div className={styles.Key}><p>Boost<br />lens water retention</p></div>
                        <div className={styles.Key}><p>Constant<br /> Hydration &#9543; Lubrication</p></div>
                        <div className={styles.Key}><p>Zero <br />Lens &#8725; Eyelid Friction</p></div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Benefits
