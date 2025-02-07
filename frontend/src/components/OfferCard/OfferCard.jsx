import React from "react";
import "./OfferCard.css";

const OfferCard = ({ title, discount, image }) => {
  return (
    <div className="offer-card">
      <img src={image} alt="Offer" className="offer-image" />
      <h2 className="offer-title">{title}</h2>
      <p className="offer-discount">{discount} off</p>
    </div>
  );
};

export default OfferCard;
