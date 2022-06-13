import React from 'react'
import FeaturedInfo from './../components/featured/FeaturedInfo';
import BarGraph from './../components/bargraph/BarGraph';
import PiChart from './../components/pichart/PiChart';
import Store from './../components/stores/Store';
import Footer from './../components/footer/Footer';

const Analysis = () => {
  return (
    <div className='home'>
       <FeaturedInfo/>
       <BarGraph/>
       <PiChart/>
       <Store/>
       <div className="wid">
        <Footer/>
       </div> 
    </div>
  )
}

export default Analysis