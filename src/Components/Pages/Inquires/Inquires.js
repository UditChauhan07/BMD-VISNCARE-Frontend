import React, { useState } from 'react'
import styles from "../Inquires/Inquires.module.css"
import Modal from '../../Modal/Modal'


const Inquires = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <section>
            <div className={styles.Inquires_div}>
                <h3>Inquires</h3>
                <p>For more information contact</p>

                <a href="mailto:tbbPRemail@brunovisioncare.com" target="_blank">tbbPRemail@brunovisioncare.com</a>
                <h4 onClick={handleOpenModal}>Contact Us</h4>
            </div>
            {/* Modal Component */}
            <Modal show={showModal} onClose={handleCloseModal}>
                <h3 style={{ textAlign: 'center' }}>Contact Us</h3>
                <form className={styles.form}>
                    <input type="text" placeholder="First name" required />
                    <input type="text" placeholder="Last name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Mobile phone number" />
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </Modal>
        </section>

    )
}

export default Inquires
