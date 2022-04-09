import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {crudOperationReducer} from './reducer';

const rootReducer = combineReducers({
  state: crudOperationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
