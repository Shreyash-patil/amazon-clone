import React from "react";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./checkout.css";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout_container">
        <div className="checkout__Div">
          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout__title">Your Amazon Cart is empty</h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Shopping Cart</h2>
            </div>
          )}
          <div className="top_shopping_cart_hr">{/* <hr /> */}</div>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div>
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
