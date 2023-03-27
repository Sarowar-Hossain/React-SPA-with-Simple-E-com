import React from "react";
import "./Product.css";

const Product = ({ Products }) => {
  const { name, img, id, price, ratings, seller } = Products;
  return (
    <div className="container">
      {Products.map((product) => (
        <div className="product-container">
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

export default Product;
