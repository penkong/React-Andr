import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/ShopPage/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
