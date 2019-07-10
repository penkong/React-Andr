import React, { Component } from 'react';
import './CheckoutItemStyles.scss';



class CheckoutItem extends Component {
  render() {
    const { cartItem: { name, imageUrl, price, quantity } } = this.props;
    return (
      <div className='checkout-item'>
        <div className='image-container'>
          <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        {/* UTF-8 Dingbats */}
        <div className="remove">&#10005;</div>
      </div>
    );
  }
}

export default CheckoutItem;