import { combineReducers } from 'redux';
// TO PERSIST REDUCER PLUS STORE
import { persistReducer } from 'redux-persist';
// its local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import { cartReducer } from './cart/cartReducer';

const persistConfig = {
  key: 'root',
  storage,
  // we persist cart reducer
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);