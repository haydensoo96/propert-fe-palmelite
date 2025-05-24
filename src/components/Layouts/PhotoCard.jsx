import React from "react";
import "./PhotoCard.css";
import { truncate } from "lodash";
import { useCheckMobileScreen } from "../../utils/common";

const getMobileStyle = () => {
  if (useCheckMobileScreen())
    return { marginLeft: "5%", fontSize: "12px", color: "lightgray" };

  return { fontSize: "20px", color: "lightgray" };
};

const PhotoCard = ({ card }) => {
  return (
    <div
      className="flexColStart innerWidth p-card"
      style={{ alignItems: "center" }}
    >
      <img src={card.image} alt="home" />
      <span className="secondaryText description" style={getMobileStyle()}>
        {truncate(card.description, { length: 100 })}
      </span>
    </div>
  );
};

export default PhotoCard;
