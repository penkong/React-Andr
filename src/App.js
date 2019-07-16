import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/ShopPage/Shop";
import SignPage from "./pages/SignPage/SignPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

// now after firebase work in console we want to let app know
// to store user to state of app
// import { auth, createUserProfileDocument, addCollectionAndDocs } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";
import { selectCollectionsForPreview } from "./redux/shop/shopSelector";

class App extends Component {
  // subscribe for stream listener
  // unsubscribeFromAuth = null;

  // its always listen until unMount ist observable but we use promise pattern on refactor
  componentDidMount() {
    // const { setCurrentUser } = this.props;
    // console.log(userAuth);
    // this is open subscription this connection is always open
    // but we must close it on unmounted
    // auth == stream of events, onAuth is observable, async is next() observer
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     // pass uid of user to create blew
    //     const userRef = await createUserProfileDocument(userAuth);
    //     // let us get data and snapShot from db
    //     userRef.onSnapshot(snapShot => {
    //       // action creator
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       });
    //     });
    //   } 
    //   setCurrentUser(userAuth);
      // give us hat, jackets and ... to save in fire as new name collection that named collections
      // addCollectionAndDocs('collections', collectionsArr.map(
      //     ({title, items}) => ({title, items})
      //   )
      // );
      // observer pattern observer(next(), err(), complete());
    // }, error => console.log(error));
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          
          {/* by render we decide what comp to render and show */}
          <Route exact path="/signin" 
            render={()=>
              currentUser 
              ? (<Redirect to='/'/>) 
              : (<SignPage/>)
            } 
          />
          
        </Switch>
      </div>
    );
  }
}
// current user fetch
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArr: selectCollectionsForPreview
})

// action creator
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps)(App);
