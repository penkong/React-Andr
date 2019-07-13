import { createStore , applyMiddleware } from 'redux';
// redux persist use local storage and session storage
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
// redux logger to catch and display actions emit from ui
// it's middleware also for debug redux code

// redux thunk is middleware for async request from action creator
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';



// middleware that store expect is in arr.
const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// it let browser make decision to save
export const persistor = persistStore(store);