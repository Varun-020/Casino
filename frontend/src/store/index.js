import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';

const rootReducers = combineReducers({
    AuthReducer
});

const middlewares = [thunk];

const Store = createStore(
    rootReducers,
    applyMiddleware(...middlewares)
);

export default Store;