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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section>
    <div className={styles.heroSection}>
      <div className={styles.Slider_section}>
        <Slider {...settings}>
          <div className={styles.Img_div}>
            <img src="Images/011.png" alt="Slide 1" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/033.png" alt="Slide 2" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/044.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/022.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/055.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/066.png" alt="Slide 3" />
          </div>
          <div className={styles.Img_div}>
            <img src="Images/077.png" alt="Slide 3" />
          </div>
        
        </Slider>
      </div>
      <div className={styles.content_section}>
        <div className={styles.tittle}>
        <h1>See it All</h1>
        <p className={styles.titpara}>Groundbreaking Optical Innovation that Change Live</p>
        <div className={styles.description}>
          <p><span className={styles.boldfontw}>Bruno Vision Care</span> is more than a vision correction company. Our eye health technologies go beyond traditional contact lenses, integrating with the body's natural systems. By aligning lens technology with human biology, we help patients see their world clearly while preventing conditions and halting physiological changes before they impact their lifestyle.</p>
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
