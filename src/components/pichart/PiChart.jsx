import React from 'react';
import "./pichart.css";
import { AreaChart , Area , Tooltip , ResponsiveContainer , PieChart , Pie } from 'recharts';

const data=[
  {
  view: 1000,
},

{
  view: 5000,
},
{
  view: 3000,
},
{
  view: 2000,
},
{
  view: 6000,
},
]

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

const PiChart = () => {
  return (
    <div className='pi_main'>
    <div className='pi_left' style={{marginTop:"30px" , marginLeft:"20px"}}>
          <h3>Daily Views</h3>
          <span>September 2021 - October 2021</span>
          <ResponsiveContainer width={655}  height={380}>
             <AreaChart data={data} >
               <defs>
                <linearGradient id="colorView" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={30} stopColor="#8884d8" stopOpacity={0.4}/>
                  <stop offset={75} stopColor="#ff9bff81" stopOpacity={0.3}/>
                  <stop offset={95} stopColor="#FFFFFF" stopOpacity={0.2}/>
                </linearGradient>
                </defs>
                <Tooltip/>
                <Area  type="monotone" dataKey="view" stroke="#8884d8" strokeWidth={1} strokeOpacity={1} fill="url(#colorView)"  />
               
             </AreaChart>
          </ResponsiveContainer>
    </div>

    <div className="pi_right">
    <h3>Pie Chart</h3>
          <span>September 2021 - October 2021</span>
    <ResponsiveContainer width={500} height={400}>
    <PieChart >
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={150} fill="#82ca9d" label />
</PieChart>
    </ResponsiveContainer>
    </div>
    </div>
  )
}

export default PiChart