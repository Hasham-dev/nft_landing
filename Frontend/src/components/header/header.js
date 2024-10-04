import React, { useState, useEffect } from "react";
import "./header.css";
import LOGO_ONE from "./icons/logo.png";
const Header = () => {
  const [imgAddress, setImage] = useState(LOGO_ONE);

  return (
    <>
     

      <div className="NavBar">
        <div className="container">
          <img src={imgAddress} width="auto" height="50px" />

          <div className="navbar_link">
            <a href="https://cr8rtoken.io/">Home</a>
            <a href="https://gamerules.cr8rtoken.io/">Game Rules</a>
            <a href="https://statsmemes1.cr8rtoken.io/">Stats Page</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
