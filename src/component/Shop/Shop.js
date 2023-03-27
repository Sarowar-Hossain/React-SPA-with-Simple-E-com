import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import AddToCart from "../AddToCart/AddToCart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
    const [items, setItems] = useState([]);

    const addToCartHandle = (data) => {
      const itemsArr = [...items, data];
      setItems(itemsArr);
      addToDb(data.id);
    };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    const getStoredCart = getShoppingCart()
    for (const id in getStoredCart) {
        console.log(id);
    }
  },[products])

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => 
        <Products
            key={product.id}
            addToCartHandle={addToCartHandle}
            product={product}
          ></Products>
        )}
      </div>

      <div className="order-summary">
        {<AddToCart items={items}></AddToCart>}
      </div>
    </div>
  );
};

export default Shop;
