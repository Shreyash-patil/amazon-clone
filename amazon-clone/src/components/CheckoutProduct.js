import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "../StateProvider";

export default function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__products">
      <div className="checkout_img_div">
        <img
          className="checkout_product_img"
          src={image}
          alt="checkout-product-img"
        />
      </div>
      <div className="checkout_product_info">
        <p className="checkout_product_tile">{title}</p>
        <p className="checkout_product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="remove_from_cart_button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}
