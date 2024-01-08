import React, { useState, useEffect } from 'react';
import styles from './Content.module.css'
import {useNavigate} from "react-router-dom";
function Content() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (activeIndex + 1) % 5;
      setActiveIndex(nextIndex);
    }, 5000); // Transition every 10 seconds

    return () => {
      // Clean up the interval on component unmount
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide">
      <br></br>
      <br></br>
      <br></br>
      
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? 'active' : ''}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? 'active' : ''}
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? 'active' : ''}
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          className={activeIndex === 3 ? 'active' : ''}
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          className={activeIndex === 4 ? 'active' : ''}
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <img
              src={`/photos/no${index + 1}.jpg`}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
    <h2 className="text-center my-4">What We Offer</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Accomodation.jpg"
              alt="Image 1"
              className="img-fluid"
            />
            <h3>Accomodation</h3>
            <a href="https://www.universityliving.com/" target="_blank" className={`btn ${styles.btnPrimary}`}>Click to Proceed</a>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Connections.jpg"
              alt="Image 2"
              className="img-fluid"
            />
            <h3>Connections</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/connections')}>Click to Proceed</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Country-ranking.jpg"
              alt="Image 3"
              className="img-fluid"
            />
            <h3>Country ranking</h3>
            <button className={`btn ${styles.btnPrimary}`}>Click to Proceed</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Currency Converter.jpg"
              alt="Image 4"
              className="img-fluid"
            />
            <h3>Currency Converter</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/currencyconverter')}>Click to Proceed</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Financial guide.jpg"
              alt="Image 1"
              className="img-fluid"
            />
            <h3>Financial Guide</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/finance')} >Click to Proceed</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Flights.jpg"
              alt="Image 2"
              className="img-fluid"
            />
            <h3>Flights</h3>
            {/* <button className={`btn ${styles.btnPrimary}`} >Click to Proceed</button> */}
            <a href="https://www.skyscanner.co.in/" target="_blank" className={`btn ${styles.btnPrimary}`}>Click to Proceed</a>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/Studies.jpg"
              alt="Image 3"
              className="img-fluid"
            />
            <h3>Studies</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/studies')}>Click to Proceed</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.box} ${styles.fadeInUp}`}>
            <img
              src="/photos/University.jpg"
              alt="Image 4"
              className="img-fluid"
            />
            <h3>Universities</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/universityranking')}>Click to Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
