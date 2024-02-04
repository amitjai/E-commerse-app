import React from 'react';
import Instagram from '../../assets/instagram_icon.png';
import Pinterest from '../../assets/pintester_icon.png';
import Whatsapp from '../../assets/whatsapp_icon.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className="online-shoping">
            <h5>ONLINE SHOPING</h5>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
        <div className="customer-policy">
            <h5>CUSTOMER POLICY</h5>
            <ul>
                <li>Contact us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Cancilation</li>
                <li>Returns</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="useful-links">
            <h5>USEFUL LINKS</h5>
            <ul>
                <li>Links</li>
                <li>Blogs</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className="keepintouch">
            <h5>KEEP IN TOUCH</h5>
            <ul>
                <li><img src={Instagram} alt="" /></li>
                <li><img src={Pinterest} alt="" /></li>
                <li><img src={Whatsapp} alt="" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer