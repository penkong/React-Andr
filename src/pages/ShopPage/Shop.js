import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import { updateCollections } from "../../redux/shop/shopAction";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';



class Shop extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // when ever code update or run for first time , 
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      // its a util to make code less
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
    })
  }
  
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
