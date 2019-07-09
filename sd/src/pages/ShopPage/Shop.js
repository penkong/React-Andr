import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';


class Shop extends Component {
  state = { collections: SHOP_DATA };

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollection}) => {
            return <PreviewCollection key={id} {...otherCollection}/>
          })
        }
        
      </div>
    );
  }
}

export default Shop;