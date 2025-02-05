import React from "react";
import './Hero.css'
import flowerImage from "./flowerImage.png"; 

function Hero() {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src={flowerImage} alt="flowers" />
            </div>
            <div className="hero-rectangle"></div>
            <div className="hero-text">
                <h1>Boquet Of Golden Hour Blooms</h1>
            </div>

        </div>
    );
}

export default Hero;