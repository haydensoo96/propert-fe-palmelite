import React from "react";
import "./Layouts.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useCheckMobileScreen } from "../../utils/common";

const Layouts = () => {
  const { isLoading } = useProperties();
  const [selectedItem, setSelectedItem] = useState("Type B");
  const isMobile = useCheckMobileScreen();

  const items = [
    {
      name: "Type A",
      img1: "./palm_assets/TypeA.png",
    },
    {
      name: "Type B",
      img1: "./palm_assets/TypeB.png",
    },
  ];

  const getSelectedItem = (itemName) => {
    return items.find((item) => item.name === itemName);
  };

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div
      id="Layouts"
      style={{
        backgroundColor: "var(--black)",
      }}
    >
      <div className="paddings flexColCenter">
        <span
          className="primaryText"
          style={
            isMobile
              ? {
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "white",
                  marginBottom: "2%",
                }
              : {
                  fontWeight: "300",
                  fontSize: "40px",
                  color: "white",
                  marginTop: "1%",
                  marginBottom: "2%",
                }
          }
        >
          THOUGHTFULLY CRAFTED FLOOR PLAN
        </span>

        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "1%",
          }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item.name)}
              style={
                isMobile
                  ? {
                      fontSize: "15px",
                      margin: "10px",
                      padding: "5px 35px",
                      cursor: "pointer",
                      background: "transparent",
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "15px",
                      marginBottom: "10%",
                    }
                  : {
                      fontSize: "15px",
                      margin: "10px",
                      padding: "20px 30px",
                      cursor: "pointer",
                      background: "transparent",
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "20px",
                    }
              }
            >
              {item.name}
            </button>
          ))}
        </div>
        <div
          style={
            isMobile
              ? {
                  display: "flex",
                  background: "white",
                  width: "100%",
                  justifyContent: "space-evenly",
                }
              : {
                  display: "flex",
                  background: "white",
                  width: "70%",
                  heigh: "50%",
                  paddingTop: "1%",
                  paddingBottom: "1%",
                  justifyContent: "space-evenly",
                }
          }
        >
          <img
            style={{ maxWidth: "60%", objectFit: "contain" }}
            src={getSelectedItem(selectedItem).img1}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
