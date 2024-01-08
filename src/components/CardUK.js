import React from "react";

function CardUK({ title, subtitle, paragraph, imageUrl, section1, section2 }) {
  return (
    <div className="crd">
      <div className="crd-image">
        <img src={imageUrl} alt="Card" />
      </div>
      <div className="crd-content">
        <h3>{title}</h3>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <p>{paragraph}</p>
        <div className="sctions">
          <div className="sction">
            <span>World University Rankings 2024:</span> {section1}
          </div>
          <div className="sction">
            <span>UK Rank 2024:</span> {section2}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUK;
