import React, { useState } from "react";
import "./payment.css";
import Header from "./Header";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "../reducer";
import QRcode from "./GpayQR.jpeg";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  const handlePlaceOrder = () => {
    if (isPaymentDone) {
      navigate("/order_placed");
    } else {
      alert(
        "Please confirm that the payment is done by checking the checkbox."
      );
    }
  };

  return (
    <>
      <Header />
      {basket?.length > 0 ? (
        <div className="payment_page">
          {/* Checkout(no.of items) */}
          <div className="checkout_title">
            <h1 className="checkout_title">
              Checkout( {basket?.length} item(s) )
            </h1>
          </div>
          <div className="payment_container">
            {/* User Address */}
            <div className="payment_section">
              <div className="payment_title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment_address">
                <p>{user?.email}</p>
                <p>B103, Sindhu Vihar,</p>
                <p>Jule Solapur</p>
                <p>413004</p>
              </div>
            </div>
            {/* Product Review */}
            <div className="payment_section">
              <div className="payment_title">
                <h3>Review items and delivery</h3>
              </div>
              <div className="payment_items">
                {basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
            {/* Payment Method */}
            <div className="payment_section">
              <div className="payment_title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment_details">
                {/* All Payment Methods goes here */}
                <div className="payment_methods_div">
                  <div className="payment_method">
                    <input
                      type="radio"
                      name="payment_method"
                      value="upi"
                      defaultChecked
                    />
                    <label> UPI</label>
                  </div>
                  <div className="payment_method">
                    <img className="gpay_QR" src={QRcode} alt="qrcode" />
                  </div>
                  <div className="payment_done_input_div">
                    <label className="payment_done_label">Payment Done </label>
                    <input
                      type="checkbox"
                      checked={isPaymentDone}
                      onChange={(e) => setIsPaymentDone(e.target.checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="place_order_div">
            <div className="place_order_btn_div">
              <button onClick={handlePlaceOrder} className="place_order_btn">
                Place your order
              </button>
            </div>
            <div className="order_total_div">
              <div className="order_total">
                <NumericFormat
                  value={getBasketTotal(basket)}
                  prefix="₹"
                  thousandsGroupStyle="lakh"
                  thousandSeparator=","
                  displayType="text"
                  renderText={(value) => (
                    <>
                      <p className="order_total_p">
                        Order Total :<strong>{value}</strong>
                      </p>
                    </>
                  )}
                />
              </div>
              <div className="place_order_tnc_div">
                <p className="place_order_tnc">
                  By placing your order, you agree to Amazon's privacy notice
                  and conditions of use
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default Payment;
