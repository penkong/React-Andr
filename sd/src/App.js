import React, { Component } from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/ShopPage/Shop';
import SignPage from './pages/SignPage/SignPage';
// now after firebase work in console we want to let app know
// to store user to state of app
import { auth } from './firebase/firebase.utils';



class App extends Component {
  state = {
    currentUser: null,
  }
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    // this is open subscription this connection is always open
    // but we must close it on unmounted
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={SignPage}/>
      </Switch>
    </div>
    );
  }
}

export default App;


