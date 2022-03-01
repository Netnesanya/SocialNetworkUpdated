import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))




export default store;