import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptKey = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--black)",
      }}
    >
      <div className="custom-image-container">
        <motion.h1
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <div className="custom-image-container">
            <img src="./palm_assets/intro.png" alt="" />
          </div>
        </motion.h1>
      </div>
    </div>
  );
};

export default ConceptKey;
