import React, { Component } from 'react';
import './CartDropDownStyles.scss';

import CustButton from '../CustButton/CustButton';


class CartDropDown extends Component {
  render() {
    return (
      <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustButton> GO TO CHECKOUT </CustButton>
      </div>
    );
  }
}

export default CartDropDown;