import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import { updateCollections } from "../../redux/shop/shopAction";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

// hoc pattern
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
  state = { isLoading: true };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // when ever code update or run for first time , 
    // observable pattern has live style update
    collectionRef.get().then(snapshot => {
      // its a util to make code less
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    })
  }
  
  render() {
    const { match } = this.props;
    const { isLoading } = this.state
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
        />
        <Route path={`${match.path}/:collectionId`} 
          render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
