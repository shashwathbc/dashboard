import React from 'react';
import "./sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDashboard , faHamburger} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle"> <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon> Dashboard</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
          <li className="sidebarListItem active">
            {/* <LineStyle className="sidebarIcon" /> */}
            Analysis
          </li>
          </Link>
          <li className="sidebarListItem">
            {/* <Timeline className="sidebarIcon" /> */}
            Monitor
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            WorkPlace
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            Form
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            List
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            Profile
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            Result
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            Exception
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            Acoount
          </li>
          <li className="sidebarListItem">
            {/* <TrendingUp className="sidebarIcon" /> */}
            Graphic Editor
          </li>
        </ul>
        <div className='sidebarListItem'>
      <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
      </div>
      </div>
    </div>
  </div>
  )
}

export default SideBar
