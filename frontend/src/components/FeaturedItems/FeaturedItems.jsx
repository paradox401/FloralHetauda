import React from "react";
import './FeaturedItems.css'
import Items from "../Items/Items";
import { flowers } from "../../assets/assets";

function FeaturedItems() {
    return (
        <div className="featured-div">
            <h2>Special Offers</h2>
            <div className="featured-items">

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

    )
}



export default FeaturedItems;