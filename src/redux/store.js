// library imports
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// redux imports
import rootReducer from './root-reducer';

// middlewares is simply a reference to all the middlewares
const middlewares = [logger];

// store is a merging of the rootReducer and all the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;