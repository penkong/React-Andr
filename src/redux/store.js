import { createStore , applyMiddleware } from 'redux';
// redux persist use local storage and session storage
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
// redux logger to catch and display actions emit from ui
// it's middleware also for debug redux code

import rootReducer from './rootReducer';



// middleware that store expect is in arr.
const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// it let browser make decision to save
export const persistor = persistStore(store);