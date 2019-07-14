import { createStore , applyMiddleware } from 'redux';
// redux persist use local storage and session storage
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
// redux logger to catch and display actions emit from ui
// it's middleware also for debug redux code

// redux thunk is middleware for async request from action creator
// import thunk from 'redux-thunk';

// func conditioly runs => with specific action , multi saga
// for handle side effects and APIs and impure funcs
// with usage of generator and resembler (pause funcs)
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import { fetchCollectionsStart } from './shop/shopSagas';

const sagaMiddleware = createSagaMiddleware();

// middleware that store expect is in arr.
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);
// it let browser make decision to save
export const persistor = persistStore(store);