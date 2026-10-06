/* Session 6 – Lists & Conditional RenderingTopics to Cover:Rendering arrays with map().Conditional rendering (if, ternary).Demo:Render dynamic product list. */


import React from 'react'
import PlayList from './PlayList'
import OrderStatus from './OrderStatus';
import FollowerList from './FollowerList';
import CartPage from '../Session9/CartPage';
import CartSummary from './CartSummary';

function Session6() {

    //PlayList prop
    const songs = [
        {
            title: "Believer",
            artist: "Imagine Dragons"
        },
        {
            title: "Shape of You",
            artist: "Ed Sheeran"
        },
        {
            title: "Memories",
            artist: "Maroon 5"
        }
    ];


    //FollowerList prop
    const followers = ["Rahul", "Priya", "Amit", "Sneha"];


    //CartSummary prop
    const cartItems = [
        {
            name: "iPhone",
            price: 70000
        },
        {
            name: "Headphones",
            price: 3000
        },
        {
            name: "Keyboard",
            price: 2000
        }
    ];

    return (
        <div>
            <PlayList songs={songs} /><br /><br />

            <h2>Order status</h2>
            <OrderStatus isDelivered={true} />
            <OrderStatus isDelivered={false} /><br /><br />

            <FollowerList followers={followers} /><br/><br/>

            <CartSummary cartItems={cartItems}/>

        </div>
    );
}

export default Session6