import React from 'react'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import './CollectionsOverviewStyles.scss';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({id, ...otherCollection}) => {
          return <CollectionPreview key={id} {...otherCollection}/>
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
