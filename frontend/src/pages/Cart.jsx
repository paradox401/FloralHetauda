import React from "react";
import "./Cart.css";
import { flowers } from "../assets/assets";
import { useNavigate } from 'react-router-dom'



function Cart() {
    const navigate = useNavigate()

    const handleProceed = () => {
      navigate('/checkout')
    }
    const cartItems = [
        { ...flowers[0], quantity: 1 },
        { ...flowers[2], quantity: 2 },
    ];

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * parseInt(item.price), 0);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>Price: Rs. {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Subtotal: Rs. {item.quantity * parseInt(item.price)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: Rs. {calculateTotal()}</h3>
                        <button onClick={handleProceed} className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
