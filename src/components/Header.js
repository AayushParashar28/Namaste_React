import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("Use Effect");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact("Logout");
              console.log(setBtnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
