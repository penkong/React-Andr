import React, { Component } from 'react';
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cartAction';

import './CheckoutItemStyles.scss';



class CheckoutItem extends Component {
  render() {
    const { cartItem , clearItem } = this.props;
    return (
      <div className='checkout-item'>
        <div className='image-container'>
          <img src={cartItem.imageUrl} alt={cartItem.name}/>
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">{cartItem.price}</span>
        {/* UTF-8 Dingbats */}
        <div 
          className="remove-button" 
          onClick={()=>clearItem(cartItem)}
        >&#10005;
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);