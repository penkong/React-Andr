import { createStore , applyMiddleware } from 'redux';

import logger from 'redux-logger';
// redux logger to catch and display actions emit from ui
// it's middleware also for debug redux code

import rootReducer from './rootReducer';

// middleware that store expect is in arr.
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;