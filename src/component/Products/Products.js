import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./Products.css";

const Products = ({addToCartHandle}) => {
    // console.log(props.AddToCartHandle)
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  return (
    <div className="container">
      {products.map((product) => (
        <div className="product-img" key={product.id}>
          <img src={product.img} alt="" />
          <div className="product-details">
            <h4>{product.name}</h4>
            <p className="product-price">Price:{product.price}$</p>
            <p className="product-sr">Manufacturer: {product.seller}</p>
            <p className="product-sr">Ratings: {product.ratings} star </p>
            <button className="cart-btn" onClick={()=>addToCartHandle(product)}  >
                Add to Cart 
                <FontAwesomeIcon icon={faCartShopping}/>
            </button> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
