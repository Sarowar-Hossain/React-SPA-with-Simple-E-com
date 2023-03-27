import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  const { name, id, price, seller, ratings, img } = props.product;
  const addToCartHandle = props.addToCartHandle;
  return (
    <div>
      {
        <div className="product-img" key={id}>
          <img src={img} alt="" />

          <div className="product-details">
            <h4>{name}</h4>
            <p className="product-price">Price:{price}$</p>
            <p className="product-sr">Manufacturer: {seller}</p>
            <p className="product-sr">Ratings: {ratings} star </p>
            <button className="cart-btn" onClick={()=>addToCartHandle(props.product)}>
                Add to Cart <FontAwesomeIcon icon={faCartShopping}/>
            </button> 
          </div>
        </div>
      }
    </div>
  );
};

export default Products;
