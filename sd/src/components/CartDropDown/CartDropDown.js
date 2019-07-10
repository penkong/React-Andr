import React, { Component } from 'react';
import { connect } from 'react-redux'

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

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown);