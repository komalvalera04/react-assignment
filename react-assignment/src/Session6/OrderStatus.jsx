/* 2. Build a React component called OrderStatus that receives a prop isDelivered (boolean) and conditionally renders 'Order Delivered 🎉' if true, or 'Order on the way 🚚' if false, using a ternary operator. */


import React from 'react'

function OrderStatus({ isDelivered }) {
    return (
        <div>
            <h3>
                {isDelivered
                    ? "Order Delivered"
                    : "Order on the way"}
            </h3>
        </div>
    )
}

export default OrderStatus