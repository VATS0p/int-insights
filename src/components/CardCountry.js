import React from "react";
import styles from "./CardCountry.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";

const CardCountry = ({ imageSrc, title, buttonText }) => {
  const navigate = useNavigate();

  // Create a function to navigate to a specific country page
  const navigateToCountry = (country) => {
    navigate(`/universityranking/${country.toLowerCase()}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles["circle-image"]}>
        <img src={imageSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <button
        className={styles["button-custom"]}
        onClick={() => navigateToCountry(title)}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardCountry;



