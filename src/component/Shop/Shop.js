import React, { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import Products from '../Products/Products';
import './Shop.css'



const Shop = () => {
    const [items, setItems]=useState([])

    const addToCartHandle=(data)=>{
    console.log(items);
        const itemsArr = [...items, data];

        setItems(itemsArr); 
      }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <Products addToCartHandle={addToCartHandle}></Products>
            </div>
            <div className='order-summary'>
                <p>Order Summary</p>
                {
                    <AddToCart items={items}></AddToCart>
                }
            </div>
        </div>
    );
};

export default Shop;