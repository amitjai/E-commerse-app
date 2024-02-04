import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Component/Item/Item';

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} className='decoration' alt='banneration'/>
      <div className="shopCategory-indexSort">
        <p><span>Showing 1 - 12</span> out of 36 products</p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        <div className="shopcategory-product-item">
          {all_product.map((item) => {
            if (props.category === item.category) {
                return (<Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />)
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory