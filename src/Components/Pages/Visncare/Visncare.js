import React from "react";
import styles from "../../../Components/Pages/Visncare/Visncare.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Visncare = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section>
    <div className={styles.heroSection}>
      <div className={styles.Slider_section}>
        <Slider {...settings}>
          <div className={styles.Img_div}>
            <img src="Images/01.png" alt="Slide 1" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/02.png" alt="Slide 2" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/03.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/04.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/05.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/06.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/07.png" alt="Slide 3" />
          </div>
        
        </Slider>
      </div>
      <div className={styles.content_section}>
        <div className={styles.tittle}>
        <h1>See it All</h1>
        <p>Groundbreaking Optical Innovation that Change Live</p>
        <div className={styles.description}>
          <p><b>Bruno Vision Care</b> is more than a vision correction company. Our eye health technologies go beyond traditional contact lenses, integrating with the body's natural systems. By aligning lens technology with human biology, we help patients see their world clearly while preventing conditions and halting physiological changes before they impact their lifestyle.</p>
        <div className={styles.innovation}>
        <h3>Innovation</h3>
        <p>FDA approved Vifilcon C and Fusion Technology, October 25, 2024</p>

        </div>


        </div>
        </div>
      
      </div>
    </div>
    </section>
  );
};

export default Visncare;
