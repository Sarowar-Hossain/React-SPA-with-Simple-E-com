import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="container">
      {products.map((product) => (
        <div className="product-img" key={product.id}>
          <img src={product.img} alt="" />
          <div className="product-details">
            <h4>{product.name}</h4>
            <p>Price:{product.price}$</p>
            <p>Manufacturer: {product.seller}</p>
            <p>Ratings: {product.ratings} star </p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
