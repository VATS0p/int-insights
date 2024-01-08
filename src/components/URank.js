import React from "react";
import CardCountry from "./CardCountry";
import styles from "./UniRank.module.css"; // Import the CSS module
import {useNavigate} from "react-router-dom";
function URank() {
  const navigate = useNavigate();  
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
    
    <div className={styles["uniRank-App"]}>
      <h1 className={styles["uniRank-h1"]}>Top Destinations</h1>
      <h2 className={styles["uniRank-h2"]}>
        We have quality partners in a variety of destinations around the globe.
      </h2>
      <div className={styles["uniRank-card-container"]}>
        <CardCountry
          imageSrc="https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-circular-de-Canada.png"
          title="CANADA"
          buttonText="MORE INFO"
        />
        <CardCountry
          imageSrc="https://www.pngitem.com/pimgs/m/349-3492238_us-flag-vector-us-flag-circle-hd-png.png"
          title="AMERICA"
          buttonText="MORE INFO"
        />
        <CardCountry
          imageSrc="https://www.clipartmax.com/png/middle/41-413003_english-uk-flag-circle-vector.png"
          title="UK"
          buttonText="MORE INFO"
        />
        <CardCountry
          imageSrc="https://markblasdale.com/wp-content/uploads/2018/09/Australia-Flag-Round-PNG-768x768.png"
          title="AUSTRALIA"
          buttonText="MORE INFO"
        />
        <CardCountry
          imageSrc="https://www.pinclipart.com/picdir/big/565-5654469_circle-german-flag-png-clipart.png"
          title="GERMANY"
          buttonText="MORE INFO"
          
        />
      </div>
    </div>
    </div>
  );
}

export default URank;
