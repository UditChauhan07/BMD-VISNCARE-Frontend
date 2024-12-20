import React, { useState } from 'react'
import styles from "../Inquires/Inquires.module.css"
import Modal from '../../Modal/Modal'
import ReCAPTCHA from 'react-google-recaptcha';


const Inquires = () => {

    const onChange = () => {

    } ;


    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <section >
            <div className={styles.Inquires_div}>
                <h3>Inquires</h3>
                <p>For more information, contact us at:</p>
<p>
                <a href="mailto:tbbPRemail@brunovisioncare.com" target="_blank">tbbPRemail@brunovisioncare.com</a> or fill out this <span  onClick={handleOpenModal} >form</span>, amd one of our advisors will reach out to you as soon as possible.   </p>
            </div>
            {/* Modal Component */} <div className={styles.InquiresModal}>
            <Modal show={showModal} onClose={handleCloseModal}>
                <h3 style={{ textAlign: 'center' }}>Contact Us</h3>

                <h4>Thank you for your interest in Bruno Vision Care.
                We’re here to answer your questions, provide information, and assist you with any inquiries.</h4>
                <form className={styles.form}>
                    <input type="text" placeholder="First name" required />
                    <input type="text" placeholder="Last name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Mobile phone number" />
                    <textarea placeholder="Message" rows="4"></textarea>

<label><input type='checkbox'/>I accept that by submitting this form, I agree to the terms and conditions defined on our<a href='/privacy' target='_blank'> privacy policy page</a>  </label>

<ReCAPTCHA sitekey='6LcqRqEqAAAAAEbqnqHu3hcijaKmQ3j02SeGxEjM' onChange={onChange}/>


                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </Modal>
            </div>
        </section>

    )
}

export default Inquires
