import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import AddToCart from "../AddToCart/AddToCart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCartHandle = (data) => {
    const itemsArr = [...cart, data];
    setCart(itemsArr);
    addToDb(data.id);
  };
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // find the id
    for (const id in storedCart) {
      // find the products using id
      const addedProduct = products.find(product=> product.id === id)
      if(addedProduct){
        // get the quantity from the product
      const qunatity = storedCart[id]
      addedProduct.qunatity = qunatity;
      //  set the product in the array
      savedCart.push(addedProduct);
      }
    }
    // 
    setCart(savedCart)
  }, [products]);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            key={product.id}
            addToCartHandle={addToCartHandle}
            product={product}
          ></Products>
        ))}
      </div>

      <div className="order-summary">
        {<AddToCart cart={cart}></AddToCart>}
      </div>
    </div>
  );
};

export default Shop;
