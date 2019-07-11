import { combineReducers } from 'redux';
// TO PERSIST REDUCER PLUS STORE
import { persistReducer } from 'redux-persist';
// its local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import directoryReducer from './directory/directoryReducer';
import { cartReducer } from './cart/cartReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  // we persist cart reducer
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);