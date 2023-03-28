import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faRemove} from "@fortawesome/free-solid-svg-icons";
import "./AddToCart.css";

const AddToCart = ({ cart }) => {
  // console.log(items);
  let totalPrice = 0;
  let totalShipping = 0;

  for (const item of cart) {
    totalPrice = totalPrice + item.price;
    totalShipping = totalShipping + item.shipping;
  }
  const tax = totalPrice*7/100;
  const total = totalPrice + totalShipping + tax;
  // console.log(totalPrice);
  return (
    <div className="order-details">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $ {totalPrice}</p>
      <p>Total Shipping Charge: $ {totalShipping}</p>
      <p>Tax: $ {tax.toFixed(2)}</p>
      <div className="equal-line"></div>
      <h5 className="total-price">Grand Total: $ {total.toFixed(2)}</h5>

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
