import React, { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
    const [items, setItems] = useState([]);
    const addToCartHandle = (data) => {
      console.log(items);
      const itemsArr = [...items, data];
      setItems(itemsArr);
    };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
        <p>Order Summary</p>
        {<AddToCart items={items}></AddToCart>}
      </div>
    </div>
  );
};

export default Shop;
