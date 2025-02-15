import React from "react";
import "./subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  console.log(getBasketTotal(basket));
  return (
    <div className="subtotal__Div">
      <NumericFormat
        value={getBasketTotal(basket)}
        prefix="₹"
        thousandsGroupStyle="lakh"
        thousandSeparator=","
        displayType="text"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}: item(s) )<strong>{value}</strong>
            </p>
          </>
        )}
      />
      <button
        onClick={(e) =>
          basket?.length > 0 ? (
            navigate("/payment")
          ) : (
            <Alert variant="outlined" severity="info">
              Add items to Cart
            </Alert>
          )
        }
        className="proceed_to_buy_btn"
      >
        Proceed to Buy
      </button>
    </div>
  );
}

export default Subtotal;
