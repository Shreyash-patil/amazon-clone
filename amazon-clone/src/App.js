import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.js";
import Home from "./components/Home.js";
import Payment from "./components/Payment.js";
import Checkout from "./components/Checkout.js";
import OrderPlaced from "./components/OrderPlaced.js";
import { useStateValue } from "./StateProvider.js";
import { getAuth } from "firebase/auth";
import "./firebase.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any Cleanup goes here
      unsubscribe();
    };
  }, []);

  console.log("User is This :- ", user);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order_placed" element={<OrderPlaced />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
