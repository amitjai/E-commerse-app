import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Component/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Component/RelatedProducts/RelatedProduct';


function Product() {
  const {all_product} = useContext(ShopContext);
  let {productId} = useParams();
  let product = all_product.find((item) => (item.id === Number(productId)));
  // console.log(Number(productId));


  return (
    <div className='product'>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DiscriptionBox />
        <RelatedProduct />
    </div>
  )
}

export default Product;