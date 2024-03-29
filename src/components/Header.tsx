import React from "react";
import appIcon from "../images/appIcon.png";
import { Link } from "react-router-dom";
import AppStoreBadges from "./AppStoreBadges";
import "./Header.css";

interface HeaderProps {
  appStoreBadgesOpacity: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  const headerStyle: React.CSSProperties = {
    height: "70px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    borderBottom: "0.1px solid #282c34",
    position: "sticky",
    top: 0,
    backgroundColor: "white",
  };

  const imageStyle: React.CSSProperties = {
    height: "50px",
    pointerEvents: "none",
    borderRadius: "50%",
  };

  const h1Style: React.CSSProperties = {
    color: "#282c34",
    fontSize: "calc(10px + 2vmin)",
    marginLeft: "0.5vw",
  };

  const linkStyle: React.CSSProperties = {
    color: "inherit",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle}>
        <img src={appIcon} style={imageStyle} alt="app icon" />
        <h1 style={h1Style}>MyMP</h1>
      </Link>
      <div
        className={`fade-in ${
          props.appStoreBadgesOpacity === 1 ? "visible" : ""
        }`}
      >
        <AppStoreBadges height={"10vw"} maxHeight="50px" />
      </div>
    </header>
  );
};

export default Header;
