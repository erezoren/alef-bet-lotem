import {applyMiddleware, combineReducers, createStore} from 'redux';
import chat from './chatReducer'
import {FIREBASE_INIT} from "../actions/actions_types";
import {firebaseMessages} from "../middleware";

const reducer = combineReducers({
  chat
});

const store = createStore(reducer, applyMiddleware(firebaseMessages));
window.store = store;
store.dispatch({type: FIREBASE_INIT});
export default store;
