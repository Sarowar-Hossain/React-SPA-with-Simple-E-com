import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowCircleRight, faCoffee, faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons'
import './AddToCart.css'

const AddToCart = ({items}) => {
    console.log(items);
    let tax;
    let shippingCharge;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    if(totalPrice>100){
        tax = parseInt((3/100)*totalPrice)
        shippingCharge = parseInt((1/100)* totalPrice)
        console.log(tax)
    }else{
        tax = 0;
        shippingCharge = 0;
    }
    const grandTotal = totalPrice + tax + shippingCharge;
    return (
        <div className='order-details'>
            <p className='p-tag'>Selected Items: {items.length}</p>
            <p className='p-tag'>Total Price: {totalPrice}$</p>
            <p className='p-tag'>Total Shipping Charge: {shippingCharge}$</p>
            <p className='p-tag'>Tax: {tax}$</p>
            <div className='equal-line'></div>
            <p className='total-price'>Grand Total: {grandTotal}$</p>
            <button className='clear-cart-btn'>Clear Cart
            <FontAwesomeIcon icon={faRemove} className="highlight" />
            </button>
            <button className='review-btn'>Review Order 
            <FontAwesomeIcon icon={faArrowCircleRight} className="highlight"/>
            </button>
        </div>
    );
};

export default AddToCart;