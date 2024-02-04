import React, { useContext, useState } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import CartIcon from '../../assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

export default function Navigation() {
  const {getTotalCartItem} = useContext(ShopContext);
  const [line, setLine] = useState("shop");
  return (
    <div className='navigation'>
        <div className="logo" ><h1>E-commerce App</h1></div>
        <ul className="list">
            <li className="listItem" onClick={() => setLine("shop")}><NavLink to='/'
            style={{textDecoration:"none"}}>Shop {line === "shop" ? <hr className='hr'/> : <></>}</NavLink></li>

            <li className="listItem" onClick={() => setLine("mens")}><NavLink to='/mens'style={{textDecoration:"none"}}>Mens {line === "mens" ? <hr className='hr'/> : <></>}</NavLink></li>

            <li className="listItem" onClick={() => setLine("womens")}><NavLink to='/womens' style={{textDecoration:"none"}}>Womens {line === "womens" ? <hr className='hr'/> : <></>}</NavLink></li>

            <li className="listItem" onClick={() => setLine("kids")}><NavLink to='/kids' style={{textDecoration:"none"}}>Kids {line === "kids" ? <hr className='hr'/> : <></>}</NavLink></li>

        </ul>
        <div className="connect">
            <NavLink to='/login'><button className='btn'>Login</button></NavLink>
            <NavLink to='/cart'><img src={CartIcon} alt="" /></NavLink>
            <span className='count'>{getTotalCartItem()}</span>
        </div>
    </div>
  )
}
