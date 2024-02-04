import React from 'react';
import './Home.css';
import arrowIcon from '../../assets/arrow.png';
import heroIcon from '../../assets/hero_image.png'

function Home() {
  return (
    <div className='home'>
        <div className="home-left">
            <h3>NEW ARRIVELS ONLY</h3>
            <p>New <br /> collection <br /> for everyone</p>
            <button className='home-btn'>
                <span>Letest Collection</span>
                <img src={arrowIcon} alt="" />
            </button>
        </div>
        <div className="home-right">
            <img src={heroIcon} alt="" />
        </div>
    </div>
  )
}

export default Home