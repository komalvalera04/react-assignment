/* 2. Build a Flipkart-style cart item quantity manager: in a CartItem component, display the item name and quantity, and add '+' and '-' buttons to increase or decrease the quantity using useState. */


import React, { useState } from 'react'

function CartItem() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                margin: "20px 0",
                width: "300px",
            }}
        >
            <h2>Wireless Headphones</h2>

            <button onClick={decreaseQuantity}>−</button>

            <span style={{ margin: "0 20px" }}>
                {quantity}
            </span>

            <button onClick={increaseQuantity}>+</button>
        </div>
    );
}

export default CartItem