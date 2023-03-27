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
                <h1>Order-Summary</h1>
            </div>
        </div>
    );
};

export default Shop;