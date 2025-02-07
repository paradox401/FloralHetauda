import React from "react";
import "./OfferCardDisplay.css";

import OfferCard from "../OfferCard/OfferCard";
import { offers } from "../../assets/assets";


function OfferCardDisplay() {
  return (
    <div className="offer-card-display">
      <h2 className="offer-card-display-title">Exciting Offers</h2>
      <div className="offers-container">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            discount={offer.discount}
            image={offer.image}
          />
        ))}
      </div>
    </div>
  );
}

export default OfferCardDisplay;