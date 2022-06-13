import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faQuestion,
  faBell,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Badge from '@mui/material/Badge';

const Header = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AntDesignPro</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "white" }}
            />
          </div>
          <div className="topbarIconContainer">
            <FontAwesomeIcon icon={faQuestion} style={{ color: "white" }} />
          </div>
          <div className="topbarIconContainer">
            <Badge badgeContent={4} color="primary">
            <FontAwesomeIcon icon={faBell} style={{ color: "white" }} />
           </Badge>
          </div>
          <div className="topbarIconContainer">
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
          <div className="topbarIconContainer">
            <p style={{ color: "white" }}>Shashwath</p>
          </div>
          <div className="topbarIconContainer">
            <FontAwesomeIcon icon={faLanguage} style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
