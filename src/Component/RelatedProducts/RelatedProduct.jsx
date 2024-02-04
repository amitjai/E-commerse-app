import React from 'react';
import './RelatedProduct.css';
import data_products from '../../assets/data';
import Item from '../Item/Item';

function RelatedProduct() {
  return (
    <div className='related-product'>
        <h1>RELATED PRODUCTS</h1>
        <div className="related-product-items">
            {data_products.map((item) => {
                return (<Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />)
            })}
        </div>
    </div>
  )
}

export default RelatedProduct