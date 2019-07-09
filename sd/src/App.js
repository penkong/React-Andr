import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/ShopPage/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
