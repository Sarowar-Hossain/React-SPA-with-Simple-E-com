import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowCircleRight, faCoffee, faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons'
import './AddToCart.css'

const AddToCart = ({items}) => {
    // console.log(props);
    return (
        <div className='order-details'>
            <p className='p-tag'>Selected Items: {items.length}</p>
            <p className='p-tag'>Total Price:</p>
            <p className='p-tag'>Total Shipping Charge:</p>
            <p className='p-tag'>Tax: $</p>
            <div className='equal-line'></div>
            <p className='total-price'>Grand Total: $</p>
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