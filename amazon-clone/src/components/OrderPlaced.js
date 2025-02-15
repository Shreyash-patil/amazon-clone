import React from "react";
import "./order_placed.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function OrderPlaced() {
  return (
    <>
      <div className="order_placed_container">
        <div className="order_placed_h2_div">
          <h2 className="order_placed_h2">
            Order placed, thank you! <CheckCircleOutlineIcon />
          </h2>
        </div>
        <p>Confirmation will be sent to your email</p>
      </div>
      ;
    </>
  );
}

export default OrderPlaced;
