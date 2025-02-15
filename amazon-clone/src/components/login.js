import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// import ReactDOM from "react-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // Stops from reloading
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     //Logged in, redirect to homepage
    //   })
    //   .catch((e) => alert(e.message));
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          alert("Invalid Email");
        } else if (
          error.message === "Firebase: Error (auth/missing-password)."
        ) {
          alert("Enter Password");
        }
      });
  };

  const register = (event) => {
    event.preventDefault(); // Stops from refreshing
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     //create user and log in, redirect to homepage
    //     navigate.push("/");
    //   })
    //   .catch((e) => alert(e.message));
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          alert("Email already in use.");
        } else if (
          error.message === "Firebase: Error (auth/missing-password)."
        ) {
          alert("Enter Password");
        }

        // ..
      });
  };

  return (
    <>
      <div className="login_container">
        <Link to="/">
          <img
            className="login__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
            alt="Amazon-logo"
          />
        </Link>
        <div className="login__Div">
          <h1 className="login_sign_in_title">Sign in</h1>

          <form>
            <label className="login_input_label">
              Email or mobile phone number
            </label>
            <input
              className="login__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            ></input>
            <label className="login_input_label">Password</label>
            <input
              className="login__input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            ></input>
            <button
              type="submit"
              onClick={login}
              className="login_continue_btn"
            >
              Continue
            </button>
          </form>

          <p className="login_terms_and_cond">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice
          </p>
          <button onClick={register} className="login_createAcc_btn">
            Create your Amazon account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
