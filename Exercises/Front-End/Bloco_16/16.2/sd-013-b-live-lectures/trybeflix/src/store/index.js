import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from '../reducers';

const rootReducers = combineReducers({ movieReducer });

const store = createStore(rootReducers, composeWithDevTools());

export default store;
