import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CartDropDownStyles.scss';
import CustButton from '../CustButton/CustButton';
import CartItem from '../CartItem/CartItem';


class CartDropDown extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          }
        </div>
        <CustButton> GO TO CHECKOUT </CustButton>
      </div>
    );
  }
}

// this is memoize ver with smaller state
const mapStateToProps = state => ({
  cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);