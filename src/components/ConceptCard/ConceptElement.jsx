import React from "react";
import "./ConceptCard";
import { motion } from "framer-motion";

const ConceptElement = () => {
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
                src="./northwoods_assets/elements-new.webp"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ConceptElement;
