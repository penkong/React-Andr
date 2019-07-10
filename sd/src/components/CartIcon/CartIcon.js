import React from 'react'
import './CartIconStyles.scss';
import { ReactComponent as Shopping } from '../../assets/shopping.svg';

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <Shopping className='shopping-icon'/>
      <span className='item-count'> 0 </span>
    </div>
  )
}


export default CartIcon;
