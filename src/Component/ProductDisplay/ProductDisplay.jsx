import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
        <div className="product-display-left">
          <div className="product-display-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="product-display-img">
            <img src={product.image} alt="" className='product-display-main-img' />
          </div>
        </div>
        <div className="product-display-right">
          <h1>{product.name}</h1>
          <div className="product-display-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="product-display-prices">
            <div className="product-display-old-price">${product.old_price}</div>
            <div className="product-display-new-price">${product.new_price}</div>
          </div>
          <div className="product-display-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam repellendus consectetur in velit suscipit perspiciatis rerum itaque earum alias. Voluptates veniam sapiente eveniet alias.
          </div>
          <div className="product-display-size">
            <h2>Select Size</h2>
            <div className="product-display-different-sizes">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>
          <button className='add-btn' onClick={() => addToCart(product.id)}>ADD TO CART</button>
          <p className='product-display-category'><span>Category :</span> women, T-Shirt, Crop Top</p>
          <p className='product-display-category'><span>Tags :</span> Modern, Letest</p>
        </div>
    </div>
  )
}

export default ProductDisplay