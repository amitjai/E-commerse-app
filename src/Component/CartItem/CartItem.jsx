import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

function CartItem() {
    const {getTotalCartAmount, all_product, cartItem, removeToCart} = useContext(ShopContext);
  return (
    <div className='cart-item'>
        <div className="cart-item-formate-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
        {all_product.map((e) => {
            if(cartItem[e.id] > 0) {
                return (
                    <div key={e.id}>
                        <div className="cart-item-formate cart-item-formate-main">
                            <img src={e.image} alt="" className='cart-item-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cart-item-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price*cartItem[e.id]}</p>
                            <img src={remove_icon} onClick={() => {removeToCart(e.id)}} alt="" className='mark'/>
                        </div>
                        <hr />
                    </div>
                )
            }
            return null;
        })}
        <div className="cartItem-down">
            <div className="cartItem-total">
                <h1>Cart Totals</h1>
                <div className="cartItem-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartItem-details">
                    <p>Shiping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartItem-details">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartItem-promocode">
                <p>If you have a promocode, Enter it here</p>
                <div className="cartItem-promobox">
                    <input type="text" placeholder='promocode' />
                    <button>Submit</button>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default CartItem