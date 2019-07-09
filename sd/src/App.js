import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/ShopPage/Shop';
import SignPage from './pages/SignPage/SignPage';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={SignPage}/>
      </Switch>
    </div>
  );
}

export default App;
