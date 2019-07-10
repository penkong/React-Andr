import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartAction';


import './CollectionItemStyles.scss';
import CustButton from '../CustButton/CustButton';

class CollectionItem extends Component {
  render() {
    const { item, addItem } = this.props;
    return (
      <div className='collection-item'>
        <div 
          className='image'
          style={{backgroundImage: `url(${item.imageUrl})`}}
        />
        <div className='collection-footer'>
          <span className='name'>{item.name}</span>
          <span className='name'>{item.price}</span>
        </div>
        <CustButton inverted onClick={()=> addItem(item)}>
          Add to cart 
        </CustButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);