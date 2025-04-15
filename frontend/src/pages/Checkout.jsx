import React, { useState } from 'react'
import './Checkout.css'

function Checkout() {
  const [popup, setPopup] = useState(false)

  const handleConfirm = () => {
    setPopup(true)
  }

  return (
    <div className="checkout-page">
      <h2>eFloral Pay</h2>
      <div className="checkout-box">
        <p>Amount: Rs. 4197</p>
        <p>Merchant: Floral Hetauda</p>
        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm
        </button>
      </div>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Order Placed ✅</h3>
            <p>Your payment has been received.</p>
            <button onClick={() => setPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
