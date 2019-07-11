import React from 'react';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shopSelector';

import './CategoryPageStyles.scss';
import CollectionsItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
  return (
    <div className='collection-page'>
      <h2>Category page</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
