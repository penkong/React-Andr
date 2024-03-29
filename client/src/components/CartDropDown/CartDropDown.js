import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartAction } from '../../redux/cart/cartAction';

import './CartDropDownStyles.scss';
import CustButton from '../CustButton/CustButton';
import CartItem from '../CartItem/CartItem';


class CartDropDown extends Component {
  render() {
    const { cartItems, history, dispatch } = this.props;
    return (
      <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.length 
            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            : <span className='empty-message'>Your cart is empty</span>
          }
        </div>
        <CustButton onClick={()=>{ 
          history.push('/checkout');
          dispatch(toggleCartAction());
          }}
        > 
          GO TO CHECKOUT 
        </CustButton>
      </div>
    );
  }
}

// this is memoize ver with smaller state
const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})

// if we dont add second arg to connect it send dispatch as props to comp
export default withRouter(connect(mapStateToProps)(CartDropDown));