import React from 'react';
import './Newslater.css';

function Newslater() {
  return (
    <div className='newslater'>
        <h1>Get Exclusive offer on your Email.</h1>
        <p>Subscribe to our newletter and stay update</p>
        <div className="input">
            <input type="email" placeholder='Your email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newslater