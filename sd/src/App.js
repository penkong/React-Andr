import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/ShopPage/Shop";
import SignPage from "./pages/SignPage/SignPage";
// now after firebase work in console we want to let app know
// to store user to state of app
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";

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
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
