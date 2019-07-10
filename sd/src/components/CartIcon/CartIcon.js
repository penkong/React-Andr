import React from 'react'
import { connect } from 'react-redux'
import { toggleCartAction } from '../../redux/cart/cartAction';

import './CartIconStyles.scss';
import { ReactComponent as Shopping } from '../../assets/shopping.svg';

const CartIcon = ({toggleCartAction}) => {
  return (
    <div className='cart-icon' onClick={toggleCartAction}>
      <Shopping className='shopping-icon'/>
      <span className='item-count'> 0 </span>
    </div>
  )
}

// action dispatch to store
const mapDispatchToProps = dispatch => ({
  toggleCartAction: () => dispatch(toggleCartAction())
})

export default connect(null, mapDispatchToProps)(CartIcon);
