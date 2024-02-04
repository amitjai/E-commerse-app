import React from 'react';
import './Error.css';
import Notfound from '../../assets/notFound.jpg'
// import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <div className='error'>
      {/* <div className="logo"><h2><NavLink to='/'>E-commerce App</NavLink></h2></div> */}
      <h1>Oops! We <span>can't find </span>the page.</h1>
      <img src={Notfound} alt="Website logo" />
    </div>
  )
}
