import React from "react";
// import { useState } from 'react';
import "./bargraph.css";
import { ResponsiveContainer ,BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
// import { databargraph } from './../../data';

const BarGraph = () => {
  // const [bargraph , setBarGraph] = useState(databargraph);
  // Sample data
  const data = [
    { name: "india", students: 400 },
    { name: "usa", students: 700 },
    { name: "uk", students: 200 },
    { name: "nepal", students: 1000 },
    { name: "india", students: 400 },
    { name: "usa", students: 700 },
    { name: "uk", students: 200 },
    { name: "nepal", students: 1000 },
    { name: "india", students: 400 },
    { name: "usa", students: 700 },
    { name: "uk", students: 200 },
    { name: "nepal", students: 1000 },
  ];
  return (
    <div className="mainContainer">
      <div className="leftBar">
        <div className="head">
          {/* <span>shahs</span>
          <span>devil</span> */}
        </div>
        <div className="empty"></div>
        <div className="leftmain">
        <ResponsiveContainer width={855} height={380}>
        <BarChart width={855} height={380} data={data} className="BarChartStyle" style={{marginTop:"30px"}}>
              <Bar dataKey="students" fill="#0050b3" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
</ResponsiveContainer>
        </div>
      </div>
      <div className="rightInfo">
        <h4>DEATILED INFO DATE</h4>
        <ul className="lists">
          <li>
            <span>1</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>2</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>3</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>4</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>5</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>6</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>7</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>8</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>9</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
          <li>
            <span>10</span>
            <span>Some Info</span>
            <span>332.125</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarGraph;
