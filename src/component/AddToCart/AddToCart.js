import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faRemove} from "@fortawesome/free-solid-svg-icons";
import "./AddToCart.css";

const AddToCart = ({ items }) => {
  
  return (
    <div className="order-details">
      <h4>Order Summary</h4>
      <p>Selected Items: {items.length}</p>
      <p>Total Price: $</p>
      <p>Total Shipping Charge: $</p>
      <p>Tax: $</p>
      <div className="equal-line"></div>
      <h5 className="total-price">Grand Total: $</h5>

      <button className="clear-cart-btn">
        Clear Cart
        <FontAwesomeIcon icon={faRemove} className="highlight" />
      </button>
      <button className="review-btn">
        Review Order
        <FontAwesomeIcon icon={faArrowCircleRight} className="highlight" />
      </button>
    </div>
  );
};

export default AddToCart;

// my old calculation without localStorage

// let tax;
//   let shippingCharge;
//   const totalPrice = items.reduce((total, item) => total + item.price, 0);
//   if (totalPrice > 100) {
//     tax = parseInt((3 / 100) * totalPrice);
//     shippingCharge = parseInt((1 / 100) * totalPrice);
//   } else {
//     tax = 0;
//     shippingCharge = 0;
//   }
//   const grandTotal = totalPrice + tax + shippingCharge;