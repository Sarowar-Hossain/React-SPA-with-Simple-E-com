import React, { useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <Products></Products>
            </div>
            <div className='order-summary'>
                <p>Order Summary</p>
            </div>
        </div>
    );
};

export default Shop;