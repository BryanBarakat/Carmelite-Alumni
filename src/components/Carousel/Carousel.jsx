import React, { useEffect, useState } from 'react';
import Arrow from "../../assets/down-chevron.png";
import Logo from "../../assets/logo-carme.png";
import image4 from "../../assets/image4-carousel.jpg"
import image3 from "../../assets/image3-carousel.jpg"
import image2 from "../../assets/image2-carousel.jpg"
import image1 from "../../assets/image1-carousel.jpg"
import "./Carousel.css";

export const Carousel = () => {
    const [currentImage,setCurrentImage] = useState(0);

    const imageLinks = [image4,image3,image2,image1];
    
    const slideDown = () =>{
        const div = document.getElementById('form');
        div.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
    
    useEffect(() =>{

        const contentCarousel = document.getElementById("carousel-content");
        contentCarousel.style.marginTop = "5%";
        contentCarousel.style.opacity = "1";
    },[])
    
    useEffect(() => {
        const interval = setInterval(() => {
            incrementImageIndex();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImage]);

    const incrementImageIndex = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageLinks.length);
    };

    const decrementImageIndex = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + imageLinks.length) % imageLinks.length);
    };

    useEffect(() => {
        let container = document.getElementById("carousel-container");
        container.classList.add("image-transition");
        
        setTimeout(() => {
            container.style.backgroundImage = `url(${imageLinks[currentImage]})`;
            container.classList.remove("image-transition");
        }, 500);
    }, [currentImage]);

  return (
    <div className='carousel-container' id='carousel-container'>
        <div className="logo"><img src={Logo} alt="" /></div>
        <div className="bar"></div>
        <div className="carousel-content" id='carousel-content'>
            <h1>قدامى المدارس الكرملـيّة ـ لبنان</h1>
            <h1>Carmelite Alumni - Lebanon</h1>
            <br />
            <h2>Are you a Carmelite Alumni? Let's get in touch</h2>
            <h2>!هل أنت من قدامى مدارس الآباء الكرمليين؟ تواصل معنا</h2>
        </div>
        <div className="carousel-button">
            <button onClick={slideDown}>Get in touch / تواصل معنا</button>
        </div>
        <div className="carousel-arrows">
            <div className="arrow1-carousel"><img onClick={incrementImageIndex} src={Arrow} alt=''></img></div>
            <div className="arrow2-carousel"><img onClick={decrementImageIndex} src={Arrow} alt=''></img></div>
        </div>
        <div className="current-background-carousel">
            <div className={`bar-current ${currentImage === 0 ? "current-window" : ""}`}></div>
            <div className={`bar-current ${currentImage === 1 ? "current-window" : ""}`}></div>
            <div className={`bar-current ${currentImage === 2 ? "current-window" : ""}`}></div>
            <div className={`bar-current ${currentImage === 3 ? "current-window" : ""}`}></div>
        </div>
    </div>
  )
}

export default Carousel;