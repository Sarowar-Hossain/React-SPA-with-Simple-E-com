import React from 'react';
import './AddToCart.css'

const AddToCart = () => {
    return (
        <div className='order-details'>
            <p className='p-tag'>Selected Items:</p>
            <p className='p-tag'>Total Price:</p>
            <p className='p-tag'>Total Shipping Charge:</p>
            <p className='p-tag'>Tax: $</p>
            <div className='equal-line'></div>
            <p className='total-price'>Grand Total: $</p>
        </div>
    );
};

export default AddToCart;