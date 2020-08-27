import React from 'react';
import MiniList from '../MiniList/MiniList';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const cart = props.cart;

        let totalPrice = cart.reduce((total, cost)=> total + cost.price, 0);
        totalPrice = parseFloat(totalPrice).toFixed(2);

    return (
        <div>
            
            <div className="border border-info px-5 bg-success">
            <h4>  <FontAwesomeIcon icon={faCartPlus} className="text-white" /> Cart: <span className="text-white">{props.cart.length}</span> </h4>
    <h4>Total price: <span className="text-white"> ${totalPrice}</span></h4>
            </div>
 
    <h3>My Courses</h3>
        <div className="mini-list">
         {
            cart.map(mini=> <MiniList miniList={mini}></MiniList>)
         }
        </div>
        </div>
    );
};

export default Cart;