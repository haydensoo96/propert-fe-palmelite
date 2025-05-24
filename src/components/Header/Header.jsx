import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import { useCheckMobileScreen } from "../../utils/common";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section
      className="h-wrapper flexCenter"
      style={{
        background: "#3f3530",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img
          className="gradient-image"
          src="./palm_assets/hero-title-3.png"
          alt="logo"
          width={useCheckMobileScreen() ? 200 : 400}
        />
      </Link>
      <div className=" paddings">
        {/* logo */}

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a
              href="https://virtual.dimensions.my/GamudaNorthWoods/?media-index=1"
              target="_blank"
              style={{ color: menuOpened ? "var(--primary)" : "white" }}
            >
              Virtual View
            </a>

            <NavLink
              to="#Layouts"
              style={{ color: menuOpened ? "var(--primary)" : "white" }}
            >
              Layout
            </NavLink>

            <a
              href="#RegisterForm"
              style={{ color: menuOpened ? "var(--primary)" : "white" }}
            >
              Register
            </a>

            <button
              className="button"
              onClick={() => (window.location.href = "https://wa.link/xvrwoq")}
            >
              Download e-Bouchre
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
