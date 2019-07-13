import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCollectionFetching, selectCollectionsLoaded } from "../../redux/shop/shopSelector";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopAction";
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

// hoc pattern
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          render={
            props => 
              <CollectionsOverviewWithSpinner 
                isLoading={isCollectionFetching} 
                {...props} 
              />
          }
        />
        <Route path={`${match.path}/:collectionId`} 
          render={
            props => 
              <CollectionPageWithSpinner 
                isLoading={!isCollectionLoaded} 
                {...props} 
              />
          }
        />
      </div>
    );
  }
}

// we bring it here but in reality first point of this is in cdm
// calling action from ui
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: 
    () => dispatch(fetchCollectionsStartAsync()),
})

// bring back result for us
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionLoaded: selectCollectionsLoaded
  })

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
