import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
  const {id, name, image, old_price, new_price} = props;
  return (
    <div className='item'>
        <Link to={`/product/${id}`}><img src={image} alt="" onClick={window.scrollTo(0, 0)} /></Link>
        <p>{name}</p>
        <div className="item-prices">
            <div className="old-item-price">${old_price}</div>
            <div className="new-item-price">${new_price}</div>
        </div>
    </div>
  )
}

export default Item