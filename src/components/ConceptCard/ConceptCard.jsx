import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptCard = () => {
  return (
    <div>
      <div className="innerWidth flexCenter c-container">
        <div className="flexStart" style={{ flex: 2, padding: "10px" }}>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <div className="image-container">
              <img
                src="./northwoods_assets/Splashmania.png"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </motion.h1>
        </div>
        <div
          className="flexCenter c-left "
          style={{ flex: 1, textAlign: "center" }}
        >
          <span
            className="orangeText"
            style={{ padding: "1%", fontFamily: "fantasy", fontSize: "30px" }}
          >
            Spashmania
          </span>
          <span className="primaryText">
            GL PLAY is where families come together
          </span>
          <span className="secondaryText" style={{ padding: "1%" }}>
            This waterpark, Where Nature Meets Fun, features first-of-its-kind
            attractions, award-winning water slides, and entertainment offerings
            that will elevate experiences to new heights.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConceptCard;
