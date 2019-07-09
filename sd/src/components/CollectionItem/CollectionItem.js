import React, { Component } from 'react';
import './CollectionItemStyles.scss';


class CollectionItem extends Component {
  render() {
    const { id, name, price, imageUrl } = this.props;
    return (
      <div className='collection-item'>
        <div 
          className='image'
          style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='name'>{price}</span>
        </div>
      </div>
    );
  }
}

export default CollectionItem;