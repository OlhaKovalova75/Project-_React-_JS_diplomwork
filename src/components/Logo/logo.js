import React from "react";
import "./index.css";
import rozetka from "../../assets/image/rozetka.svg";
// import rozetka from "../../assets/image/rozetka.svg";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={rozetka} alt="logo" />
    </div>
  );
};

export default Logo;
