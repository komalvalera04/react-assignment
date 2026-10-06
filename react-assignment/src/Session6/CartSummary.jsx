/* 4. Create a React component called CartSummary that takes an array of cart items (each with name and price). Use map() to display each item, and show 'Cart is empty' if there are no items. Add a button that only appears if there are 3 or more items, labeled 'Checkout Now'. */


import React from 'react'

function CartSummary({ cartItems }) {
    return (
        <div>
            <h2>Cart Summary</h2>

            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ₹{item.price}
                        </li>
                    ))}
                </ul>
            )}

            {cartItems.length >= 3 && (
                <button>Checkout Now</button>
            )}
        </div>
    )
}

export default CartSummary