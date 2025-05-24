import React from "react";
import "./MapComponent.css";
import { useCheckMobileScreen } from "../../utils/common";

const MapComponent = () => {
  return (
    <div className="flexColCenter" style={{ padding: "2%" }}>
      <div className="flexColCenter" style={{ flex: 0.5 }}>
        <span
          className="primaryText"
          style={
            useCheckMobileScreen()
              ? { fontSize: "20px", fontWeight: "400", marginBottom: "3%" }
              : { fontSize: "40px", fontWeight: "200", marginBottom: "3%" }
          }
        >
          STRATEGIC LOCATION
        </span>
        <span
          className="secondaryText"
          style={{ textAlign: "center", fontSize: "15px" }}
        >
          {useCheckMobileScreen()
            ? ""
            : " Within close proximity to Cyberjaya and KLIA, with direct access from ELITE Highway and easy accessibility from other major highways."}
        </span>
      </div>

      <div
        className="image-container"
        style={
          useCheckMobileScreen()
            ? { marginTop: "2%", height: "70%" }
            : {
                marginTop: "2%",
                width: "70%",
                height: "70%",
              }
        }
      >
        <img src="./palm_assets/location.png" alt="" />
      </div>
    </div>
  );
};

export default MapComponent;
