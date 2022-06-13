import React from 'react';
import "./featuredinfo.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Revanue</span>
      <div className="featuredMoneyContainer" style={{paddingTop:"30px"}}>
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate" >
          -11.4 <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>

    <div className="featuredItem">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$4,415</span>
        <span className="featuredMoneyRate">
          -1.4 <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </span>
      </div>
      <div className="chart">
        <canvas width={49} height={46} style={{width:"49px", height:"46px"}} />
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>

    <div className="featuredItem">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,225</span>
        <span className="featuredMoneyRate">
          +2.4<FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </span>
      </div>
      <div className="chart">
        <canvas width={49} height={46} style={{width:"49px", height:"46px"}} />
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,225</span>
        <span className="featuredMoneyRate">
          +2.4<FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </span>
      </div>
      <div className="chart">
        <canvas width={49} height={46} style={{width:"49px", height:"46px"}} />
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div>
  )
}

export default FeaturedInfo