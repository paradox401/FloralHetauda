import React from "react";
import './FinestSelection.css'
import Items from "../Items/Items";
import {flowers } from "../../assets/assets";
function FinestSelection() {
    return (
        <div className="finest-selection">
            <div className="finest-selection-text">
                <h2>Discover Our Finest Selection</h2>
                <p>Our flowers are hand-picked and carefully arranged to ensure the highest quality of flowers for your special occasion.</p>
            </div>
            <div className="finest-selection-items">

                {flowers.map((flower, index) => (
                    <Items
                        key={index}
                        name={flower.name}
                        image={flower.image}
                        price={flower.price}
                    />
                ))}
            </div>
        </div>
    );
}
export default FinestSelection;