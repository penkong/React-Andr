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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";

class App extends Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // console.log(userAuth);
    // this is open subscription this connection is always open
    // but we must close it on unmounted
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // let us get data and snapShot from db
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
  currentUser: selectCurrentUser
})

// action creator
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
