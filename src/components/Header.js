import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
 
  const [ btnNameReact , setBtnNameReact ] = useState("Login");
  return (
    <div className="header">
      <div className="logo container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
