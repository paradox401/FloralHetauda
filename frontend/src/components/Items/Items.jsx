import React from "react";
import './Items.css'

const Items = (props) => {
   return (
    <div className="item">
        <div className="item-img-container">
            <img src= {props.image} alt= {props.name} className="item-image" />
            <p>{props.name}</p>
            <p><b>Price:</b>{props.price}</p>
        </div>

    </div>
   )
}

export default Items