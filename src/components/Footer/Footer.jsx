import React from "react";
import "./Footer.css";
import { useCheckMobileScreen } from "../../utils/common";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#3f3530" }}>
      <div className="flexColStart f-left">
        <img
          className="gradient-image"
          src="./palm_assets/hero-title-3.png"
          alt="logo"
          width={useCheckMobileScreen() ? 200 : 400}
        />
      </div>
    </div>
  );
};

export default Footer;
