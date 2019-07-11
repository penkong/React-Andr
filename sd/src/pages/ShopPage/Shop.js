import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shopSelector';


class Shop extends Component {


  render() {
    const { collections } = this.props;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollection}) => {
            return <CollectionPreview key={id} {...otherCollection}/>
          })
        }
        
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(Shop);