import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
     <div className="top">
      <span>Ant Design Pro</span>
      <span>
      <FontAwesomeIcon
              icon={faCat}
              style={{ color: "black" }}
            />
      </span>
      <span>Ant Design</span>
     </div>
     <div className="below">
      <span>2022 Produced by Ant Financial Experience Department</span>
     </div>
    </div>
  )
}

export default Footer