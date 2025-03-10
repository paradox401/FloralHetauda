import React from "react";
import './Hero.css'

import {assets}  from "../../assets/assets"

function Hero() {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src={assets.flowerImage} alt="flowers" />
            </div>
            <div className="hero-rectangle"></div>
            <div className="hero-text">
                <h1>From Our Garden To Your Heart </h1>
            </div>

        </div>
    );
}

export default Hero;