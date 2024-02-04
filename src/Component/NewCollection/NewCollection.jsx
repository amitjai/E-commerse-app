import React from 'react';
import new_collection from '../../assets/new_collections';
import Item from '../Item/Item';
import './NewCollection.css'

function NewCollection() {
  return (
    <div className='newCollection'>
        <h1>NEW COLLECTION</h1><hr />
        <div className="newCollection-item">
            {new_collection.map((item) => {
                return (<Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />)
            })}
        </div>
    </div>
  )
}

export default NewCollection