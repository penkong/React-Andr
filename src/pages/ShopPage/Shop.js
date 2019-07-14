import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from "../../redux/shop/shopAction";
import { CollectionsOverviewContainer } from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import { CollectionPageContainer } from '../CollectionPage/CollectionPageContainer';

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// we bring it here but in reality first point of this is in cdm
// calling action from ui
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: 
    () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(Shop);
