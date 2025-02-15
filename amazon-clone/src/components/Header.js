// import ReactDOM from "react-dom";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./header.css";
import { useStateValue } from "../StateProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();
  const login = () => {
    if (user) {
      signOut(getAuth())
        .then(() => {
          //Signed out sucessfuly
          navigate("/login");
        })
        .catch((error) => {
          //An error happened
        });
    }
  };
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>
      <div className="header__searchBarDiv">
        <input className="header__searchInput" placeholder="Search Amazon.in" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div onClick={login} className="header__linksDiv">
        <Link to={!user && "/login"} className="header__Links">
          <div className="header__linkOptDiv">
            <span className="header_optline1">Hello, {user?.email}</span>
            <span className="header_optline2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/login" className="header__Links">
          <div className="header__linkOptDiv">
            <span className="header_optline1">Returns</span>
            <span className="header_optline2">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__Links">
          <div className="header__linkbasketDiv">
            <ShoppingBasketIcon className="header__ShoppingBasketIcon" />
            <span className="header_optline2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
