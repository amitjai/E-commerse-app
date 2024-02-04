import React from 'react';
import Home from '../Component/Home/Home';
import Popular from '../Component/Popular/Popular';
import Offers from '../Component/Offers/Offers';
import NewCollection from '../Component/NewCollection/NewCollection';
import Newslater from '../Component/NewsLetter/Newslater';

function Shop() {
  return (
    <div className='shop'>
      <Home />
      <Popular />
      <Offers />
      <NewCollection />
      <Newslater />
    </div>
  )
}

export default Shop