import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartAction } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import './CartIconStyles.scss';
import { ReactComponent as Shopping } from '../../assets/shopping.svg';

const CartIcon = ({toggleCartAction, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartAction}>
      <Shopping className='shopping-icon'/>
      <span className='item-count'> {itemCount} </span>
    </div>
  )
}

// action dispatch changes on ui to store
const mapDispatchToProps = dispatch => ({
  toggleCartAction: () => dispatch(toggleCartAction())
})

// fetch state must be memoize it 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
}) 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
